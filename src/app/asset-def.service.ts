import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AssetDef } from './asset-def';

@Injectable({
  providedIn: 'root'
})
export class AssetDefService {
  private baseUrl = 'http://localhost:49275/api';
  constructor(private http:HttpClient) { }
  getAssetList():Observable<any>{
    return this.http.get(this.baseUrl+'/Asset_def');
  }
  deleteAsset(id:number):Observable<any>{
    return this.http.delete(this.baseUrl+'/Asset_def/'+id);
  }
  addAsset(pdt:AssetDef){
    return this.http.post(this.baseUrl+'/Asset_def',pdt)
  }
  GetAsset(id:number):Observable<any>{
    return this.http.get(this.baseUrl+'/Asset_def/'+id)
  }
  UpdateAsset(id:number,product:AssetDef)
  {
    return this.http.put(this.baseUrl+'/Asset_def/'+id,product)
  }
  searchAsset(name:string):Observable<any>
  {
    return this.http.get(this.baseUrl+'/Asset_def?name='+name)
  }
  getAssetType(id:number):Observable<any>{
    return this.http.get(this.baseUrl+'/Asset_type/'+id);
  }
  getAssetTypes():Observable<any>{
    return this.http.get(this.baseUrl+'/Asset_type');
  }
}
