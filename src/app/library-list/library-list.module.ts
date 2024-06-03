import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LibraryListComponent } from './library-list.component';
import { LibraryListRoutingModule } from './library-list-routing.module';


@NgModule({
  declarations: [
    LibraryListComponent 
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    LibraryListRoutingModule
  ]
})
export class LibraryListModule { }
