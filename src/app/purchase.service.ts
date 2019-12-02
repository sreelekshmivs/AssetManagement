import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PurchaseOrder } from './purchase-order';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {
  private baseUrl = 'http://localhost:49275/api';
  constructor(private http:HttpClient) { }

  getAssettypes(na: string): Observable<any>{
    return this.http.get(this.baseUrl+'/Purchase_order?na='+na);
  }

  getAllAssettypes(): Observable<any>{
    return this.http.get(this.baseUrl+'/Asset_type');
  }

  getVendors(id: number): Observable<any>{
    return this.http.get(this.baseUrl+'/Purchase_order/'+ id);
  }

  getAsset(na: string): Observable<any>{
    return this.http.get(this.baseUrl+'/Asset_def?name='+na);
  }
  getPurchaseList():Observable<any>{
    return this.http.get(this.baseUrl+'/Purchase_order');
  }
  postPurchase(po:PurchaseOrder){
    return this.http.post(this.baseUrl+'/Purchase_order',po);
  }
  getPurchase(id:number):Observable<any>{
    return this.http.get(this.baseUrl+'/PurchaseEdit/'+id);
  }
  updatePurchase(id:number,purchase:PurchaseOrder):Observable<any>{
    return this.http.put(this.baseUrl+'/PurchaseEdit/'+id,purchase);
  }
  cancelPurchase(id:number):Observable<any>{
    return this.http.delete(this.baseUrl+'/Purchase_order/'+id);
  }
}
