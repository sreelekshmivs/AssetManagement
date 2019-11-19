import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Login } from '../login';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { Observable, Subscribable, Subscriber } from 'rxjs';
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
      p_word:['',[Validators.required]],
      
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
    if(this.loginForm.invalid)
    {
      this.toastr.error('Enter username and password');
      return;
    }
   this.authService.Login(this.login).subscribe(x=>{
     x.forEach(element => {
      this.login.u_type=element["u_type"];
      console.log(this.login.u_type);
      if(this.login.u_type=='Admin')
      {
        localStorage.setItem('u_name',this.login.u_name);
        this.router.navigateByUrl('admin');
        this.toastr.success('Login Successful');
      }
      else
      {
        localStorage.setItem('u_name',this.login.u_name);
        this.router.navigateByUrl('user');

        this.toastr.success('Login Successful');
      }
    },
    error=>{
    
      this.toastr.error('Invalid Username or Password');
      
    });
    console.log(this.login.u_type);  
     });
   
    
  }
}