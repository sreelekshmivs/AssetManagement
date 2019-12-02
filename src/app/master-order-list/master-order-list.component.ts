import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PurchaseOrder } from '../purchase-order';
import { AuthService } from '../auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { MasterService } from '../master.service';

@Component({
  selector: 'app-master-order-list',
  templateUrl: './master-order-list.component.html',
  styleUrls: ['./master-order-list.component.scss']
})
export class MasterOrderListComponent implements OnInit {
  purchases: Observable<PurchaseOrder[]>;
  constructor(private authService:AuthService, private toastr: ToastrService, private router:Router, private masterOrderService: MasterService) { }

  ngOnInit() {
    this.reloadData();
  }
  reloadData(){
    this.purchases=this.masterOrderService.getAssetOrders();
  }
  Logout(){
    this.authService.logout();
    this.router.navigateByUrl('login');


  }
}
