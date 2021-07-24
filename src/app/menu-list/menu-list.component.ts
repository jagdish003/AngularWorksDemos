import { animate, state, style, transition, trigger } from '@angular/animations';
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
      state('collapsed', style({transform: 'rotate(0deg)'})),
      state('expanded', style({transform: 'rotate(180deg)'})),
      transition('expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4,0.0,0.2,1)')
      ),
    ])
  ]
})
export class MenuListComponent implements OnInit {
  expanded: any=false;
 @HostBinding('attr.aria-expanded') ariaExpanded = this.expanded;
 @Input() item: any;
 @Input() depth: any;
  constructor(public router: Router, private navService: NavServicesService) { 
  
  console.log(this.depth);
 
  }
  
 
  onItemSelected(item: Navitems) {
    if (!item.children || !item.children.length) {
      this.router.navigate([item.route]);
      this.navService.closeNav();
    }
    if (item.children && item.children.length) {
      this.expanded = !this.expanded;
    }
  }
  ngOnInit(): void {
   
  }

}
