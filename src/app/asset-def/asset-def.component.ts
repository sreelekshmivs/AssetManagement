import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AssetType } from '../asset-type';
import { AssetDefService } from '../asset-def.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AssetDef } from '../asset-def';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-asset-def',
  templateUrl: './asset-def.component.html',
  styleUrls: ['./asset-def.component.scss']
})
export class AssetDefComponent implements OnInit {
  assetForm: FormGroup;
  asset: AssetDef = new AssetDef();
  assettypes: Observable<AssetType[]>;

  constructor(private service:AuthService, private formBuilder: FormBuilder, private assetService: AssetDefService, private router: Router, private toastr: ToastrService) { }

  ngOnInit() {
    //this.reloadData();
    this.assetForm = this.formBuilder.group({
      ad_name: ['', Validators.compose([Validators.required])],
      ad_type_id: ['', Validators.compose([Validators.required])],
      ad_class: ['', Validators.compose([Validators.required])]

    });
    this.assettypes=this.assetService.getAssetTypes();
  }
  reloadData() {
    //this.assettypes=this.assetService.getAssetTypes();
  }
  addAsset() {
    this.asset.ad_name = this.assetForm.controls.ad_name.value;
    this.asset.ad_type_id = this.assetForm.controls.ad_type_id.value;
    this.asset.ad_class = this.assetForm.controls.ad_class.value;
    

    this.assetService.addAsset(this.asset).subscribe(res=>{
      if(res==1)
      {
        this.toastr.success('Success :)', 'Added Successfully');

      }
      else
      {
        this.toastr.error("Asset already exist");
      }
    });

    this.ngOnInit();
    //this.toastr.success('Success :)', 'Added Successfully');
  }
  Logout(){
    this.service.logout();
    this.router.navigateByUrl('login');


  }
}
