import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AssetDef } from '../asset-def';
import { AssetDefService } from '../asset-def.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-asset-list',
  templateUrl: './asset-list.component.html',
  styleUrls: ['./asset-list.component.scss']
})
export class AssetListComponent implements OnInit {

  
  assets:Observable<AssetDef[]>
 
  constructor(private assetService:AssetDefService,private router:Router,private toastr: ToastrService ) { }

  ngOnInit() {
  this.reloadData();
  }
reloadData(){
  this.assets=this.assetService.getAssetList();
}
deleteAsset(id:number){
    
    
  this.assetService.deleteAsset(id).subscribe(data=>{
    console.log(data);
    this.toastr.error('Oh No! :)','Deleted Successfully');
    this.reloadData();
   
  })

}
search(ad_name:string)
  {
    this.assets=this.assetService.searchAsset(ad_name);
    if(ad_name="")
    {
      this.assets=this.assetService.getAssetList();
    }
  }


}
