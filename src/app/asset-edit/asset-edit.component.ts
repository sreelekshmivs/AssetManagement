import { Component, OnInit } from '@angular/core';
import { AssetDef } from '../asset-def';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AssetDefService } from '../asset-def.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-asset-edit',
  templateUrl: './asset-edit.component.html',
  styleUrls: ['./asset-edit.component.scss']
})
export class AssetEditComponent implements OnInit {

  asset: AssetDef = new AssetDef;
  assets: AssetDef[];
  response: any;
  assettform: FormGroup;
  constructor(private assetService: AssetDefService, private route: ActivatedRoute, private formBuilder: FormBuilder, private toastr: ToastrService) { }
  id: number;
  ngOnInit() {
    this.id = this.route.snapshot.params["id"];
    console.log(this.id);
    this.assetService.GetAsset(this.id)
      .subscribe(x => {
        this.asset = x;
        console.log(x)

      }, error => console.log(error));
    this.assettform = this.formBuilder.group({
      ad_id: null,
      ad_name: [Validators.compose([Validators.required])],
      ad_type_id: [Validators.compose([Validators.required])],
      ad_class: [Validators.compose([Validators.required])],



    });
  }
  get formControls() {
    return this.assettform.controls;
  }
  UpdateAsset() {
    this.asset.ad_id = this.assettform.controls.ad_id.value;
    this.asset.ad_name = this.assettform.controls.ad_name.value;
    this.asset.ad_type_id = this.assettform.controls.ad_type_id.value;
    this.asset.ad_class = this.assettform.controls.ad_class.value;

    this.assetService.UpdateAsset(this.id, this.asset).subscribe(res => {
      this.toastr.warning('Update Successfull', 'Yipee!')
    })
  }
}
