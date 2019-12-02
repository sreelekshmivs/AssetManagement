import { Component, OnInit } from '@angular/core';
import { PurchaseService } from '../purchase.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { PurchaseOrder } from '../purchase-order';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-purchase-list',
  templateUrl: './purchase-list.component.html',
  styleUrls: ['./purchase-list.component.scss']
})
export class PurchaseListComponent implements OnInit {
  purchase:Observable<PurchaseOrder>;
  public popoverTitle: string = 'Cancel Order???';
  public popoverMessage: string = 'If sure, click Confirm...';
  public confirmClicked: boolean = false;
  public cancelClicked: boolean = false;
  purchases:Observable<PurchaseOrder[]>;
  constructor(private purchaseService:PurchaseService,private router:Router,private toastr: ToastrService,private authService:AuthService) { }

  ngOnInit() {
    this.reloadData();
  }
  reloadData(){
    this.purchase=this.purchaseService.getPurchaseList();
    this.purchases=this.purchaseService.getPurchaseList();
    this.purchases.forEach(x=>{
      x.forEach(element=>{
        console.log(element["pd_ad"]);
      })
    })
  }
  Logout(){
    this.authService.logout();
    this.router.navigateByUrl('login');


  }
  cancelOrder(id: number){
    this.purchaseService.cancelPurchase(id).subscribe(res=>{
      this.toastr.success('Order Cancelled');
      this.reloadData();
    })

  }
}
