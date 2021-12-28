import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import{MatToolbarModule}from '@angular/material/toolbar';
import {MatIconModule}from '@angular/material/icon';
import{MatSelectModule}from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import{MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import{MatTabsModule} from '@angular/material/tabs';


@NgModule({
  declarations: [],
  exports:[
    MatFormFieldModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTabsModule
  ],

  imports: [
    CommonModule
  ]
})
export class AppMaterialModule { }
