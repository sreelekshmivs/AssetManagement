import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Login } from '../login';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  isSubmitted = false;
  login:Login=new Login();
  logins: Observable <Login[]>;

  constructor(private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder,private toastr:ToastrService) { }

  ngOnInit() {
    this.logins=this.authService.getLoginDet();
    this.loginForm=this.formBuilder.group({
      u_name: ['',Validators.compose([Validators.required])],
      p_word:['',[Validators.required]]
    });
  }

  get formControls()
  {
    return this.loginForm.controls;
  }

  loginUser()
  {
    this.login.u_name=this.loginForm.controls.u_name.value;
    this.login.p_word=this.loginForm.controls.p_word.value;
    console.log(this.loginForm.value);
    this.isSubmitted=true;
    this.login.u_type="";
    if(this.loginForm.invalid)
    {
      this.toastr.error('Enter username and password');
      return;
    }
   
   this.authService.Login(this.login).subscribe(element => {
      
    if(element!=null)
    {
      this.login.u_type=element["u_type"];     
      if(this.login.u_type=='Admin')
      {
        localStorage.setItem('ACCESS_TOKEN',this.login.u_name);
        this.router.navigateByUrl('admin');
        this.toastr.success('Login Successful');
      }
      else
      {
        
        localStorage.setItem('ACCESS_TOKEN',this.login.u_name);
        this.router.navigateByUrl('user');
        this.toastr.success('Login Successful');
      }
    }
        else{
          this.toastr.error('Invalid Username or Password');
        }
      
      
      
    }
    
   ); 
   
 

   
    
  }

}