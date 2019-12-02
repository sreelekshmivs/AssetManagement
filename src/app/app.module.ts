import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AssetDefComponent } from './asset-def/asset-def.component';
import { AssetListComponent } from './asset-list/asset-list.component';
import { AssetEditComponent } from './asset-edit/asset-edit.component';
import { AdminComponent } from './admin/admin.component';
import { PurchaseManagerComponent } from './purchase-manager/purchase-manager.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
import { ToastrModule } from 'ngx-toastr';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { VendorAddComponent } from './vendor-add/vendor-add.component';
import { VendorEditComponent } from './vendor-edit/vendor-edit.component';
import { VendorListComponent } from './vendor-list/vendor-list.component';
import { PurchaseListComponent } from './purchase-list/purchase-list.component';
import { PurchaseEditComponent } from './purchase-edit/purchase-edit.component';
import { AssetMasterComponent } from './asset-master/asset-master.component';
import { AssetMasterListComponent } from './asset-master-list/asset-master-list.component';
import { MasterOrderListComponent } from './master-order-list/master-order-list.component';


@NgModule({
  declarations: [
    AppComponent,
    AssetDefComponent,
    AssetListComponent,
    AssetEditComponent,
    AdminComponent,
    PurchaseManagerComponent,
    LoginComponent,
    UserComponent,
    VendorAddComponent,
    VendorEditComponent,
    VendorListComponent,
    PurchaseListComponent,
    PurchaseEditComponent,
    AssetMasterComponent,
    AssetMasterListComponent,
    MasterOrderListComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger' // set defaults here
    })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
