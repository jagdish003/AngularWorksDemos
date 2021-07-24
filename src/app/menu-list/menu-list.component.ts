import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { TOUCH_BUFFER_MS } from '@angular/cdk/a11y/input-modality/input-modality-detector';
import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavServicesService } from '../nav-services.service';
import { Navitems } from '../navitems';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss'],
  animations: [
    trigger('indicatorRotate', [
      state('collapsed', style({ transform: 'rotate(0deg)' })),
      state('expanded', style({ transform: 'rotate(180deg)' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4,0.0,0.2,1)')
      ),
    ]),
  ],
})
export class MenuListComponent implements OnInit {
  expanded: any = false;
  @HostBinding('attr.aria-expanded') ariaExpanded = this.expanded;
  @Input() item: any;
  @Input() depth: any;
  constructor(public router: Router, private navService: NavServicesService) {
    console.log(this.depth);
  }

  itemlist: any;
  onItemSelected(item: Navitems) {
    //console.log(item);
    // item.children = [{ displayName: 'radhe', iconName: 'start_rate' }];
    //console.log(item);
    
    
    if (item.IsCalled == 0) {
      item.IsCalled=-1;
      console.log("Api Call");
      var row = new Array();
      this.navService.getData().subscribe((data) => {
        this.itemlist = data;
        for (var i = 0; i < this.itemlist.data.length; i++) {
          row.push({
            displayName: this.itemlist.data[i].employee_name,
            iconName: 'start_rate',
            IsCalled:0
          });
        }
        console.log(row);
        console.log(data);
        item.children = row;
        if (!item.children || !item.children.length) {
          this.router.navigate([item.route]);
          this.navService.closeNav();
        }
        if (item.children && item.children.length) {
          this.expanded = !this.expanded;
        }
        item.IsCalled=1;
      });
    } else {
      console.log("Not Call Call");
      if (!item.children || !item.children.length) {
        this.router.navigate([item.route]);
        this.navService.closeNav();
      }
      if (item.children && item.children.length) {
        this.expanded = !this.expanded;
      }
    }
    // if (!item.children || !item.children.length) {
    //   this.router.navigate([item.route]);
    //   this.navService.closeNav();
    // }
    // if (item.children && item.children.length) {
    //   this.expanded = !this.expanded;
    // }
  }
  ngOnInit(): void {}
}
