import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vendor } from './vendor';

@Injectable({
  providedIn: 'root'
})
export class VendorService {
  private baseUrl = 'http://localhost:49275/api';
  constructor(private http:HttpClient) { }
  getVendorList():Observable<any>{
    return this.http.get(this.baseUrl+'/vendors');
  }
  deleteVendor(id:number):Observable<any>{
    return this.http.delete(this.baseUrl+'/vendors/'+id);
  }
  addVendor(pdt:Vendor){
    return this.http.post(this.baseUrl+'/vendors',pdt)
  }
  getAssetType(id:number):Observable<any>{
    return this.http.get(this.baseUrl+'/Asset_type/'+id);
  }
  getAssetTypes():Observable<any>{
    return this.http.get(this.baseUrl+'/Asset_type');
  }
  GetVendor(id:number):Observable<any>{
    return this.http.get(this.baseUrl+'/vendors/'+id)
  }
  updateVendor(id:number,product:Vendor)
  {
    return this.http.put(this.baseUrl+'/vendors/'+id,product)
  }
  putVendor(id:number,vendor:Vendor):Observable<any>{
    return this.http.put(this.baseUrl+'/vendors/'+id,vendor);
  }
  searchVendor(name:string):Observable<any>
  {
    return this.http.get(this.baseUrl+'/vendors?name='+name)
  }
}
