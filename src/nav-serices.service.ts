import { Injectable } from '@angular/core';

@Injectable()
export class NavSericesService {
  public appDrawer: any;

  constructor() {}

  public closeNav() {
    this.appDrawer.close();
  }

  public openNav() {
    this.appDrawer.open();
  }
}
