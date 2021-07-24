import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavServicesService {

  public appDrawer: any;

  constructor(private httpClient:HttpClient) {}

  public closeNav() {
    this.appDrawer.close();
  }

  public openNav() {
    this.appDrawer.open();
  }
  getData(){
return this.httpClient.get("http://dummy.restapiexample.com/api/v1/employees");
  }
}
