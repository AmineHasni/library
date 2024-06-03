import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LibraryRoutingModule } from './library-routing.module';
import { LibraryComponent } from './library.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    LibraryComponent,

    
  ],
  imports: [
    CommonModule,
    LibraryRoutingModule,
    CommonModule, 
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class LibraryModule { }
