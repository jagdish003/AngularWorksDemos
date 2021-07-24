import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MenuListComponent } from '../menu-list/menu-list.component';
import { NavSericesService } from '../nav-serices.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MatMenuModule,
    MatListModule,
    MatIconModule
  ],
  declarations: [AppComponent, MenuListComponent],
  bootstrap: [AppComponent],
  providers: [NavSericesService]
})
export class AppModule {}
