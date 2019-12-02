import { Component, OnInit } from '@angular/core';
import { Vendor } from '../vendor';
import { Observable } from 'rxjs';
import { VendorService } from '../vendor.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.scss']
})
export class VendorListComponent implements OnInit {
  public popoverTitle: string = 'Delete';
  public popoverMessage: string = 'Do you want to delete?';
  public confirmClicked: boolean = false;
  public cancelClicked: boolean = false;
  vendors:Observable<Vendor[]>
  constructor(private vendorService:VendorService,private router:Router,private toastr: ToastrService) { }

  ngOnInit() {
    this.reloadData();
  }
  reloadData(){
    this.vendors=this.vendorService.getVendorList();
  }
  deleteVendor(id:number){
    
    
    this.vendorService.deleteVendor(id).subscribe(data=>{
      console.log(data);
      this.toastr.success('Deleted Successfully');
      this.reloadData();
     
    })
  
  }
  search(ad_name:string)
  {
    this.vendors=this.vendorService.searchVendor(ad_name);
    if(ad_name="")
    {
      this.vendors=this.vendorService.getVendorList();
    }
  }
}
