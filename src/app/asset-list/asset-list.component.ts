import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AssetDef } from '../asset-def';
import { AssetDefService } from '../asset-def.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-asset-list',
  templateUrl: './asset-list.component.html',
  styleUrls: ['./asset-list.component.scss']
})
export class AssetListComponent implements OnInit {
  public popoverTitle: string = 'Delete';
  public popoverMessage: string = 'Do you want to delete?';
  public confirmClicked: boolean = false;
  public cancelClicked: boolean = false;
  
  assets:Observable<AssetDef[]>
 
  constructor(private service:AuthService,private assetService:AssetDefService,private router:Router,private toastr: ToastrService ) { }

  ngOnInit() {
  this.reloadData();
  }
reloadData(){
  this.assets=this.assetService.getAssetList();
}
deleteAsset(id:number){
    
    
  this.assetService.deleteAsset(id).subscribe(data=>{
    console.log(data);
    this.toastr.success('Deleted Successfully');
    this.reloadData();
   
  })

}
search(name: string)
  {
   
    if(name=="")
    {
      this.assets=this.assetService.getAssetList();
    }
    else{
      this.assets=this.assetService.searchAsset(name);
    }
  }
  Logout(){
    this.service.logout();
    this.router.navigateByUrl('login');


  }

}
