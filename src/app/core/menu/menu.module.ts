import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { UserModule } from 'src/app/pages/user/user.module';



@NgModule({
  declarations: [MenuComponent],
  imports: [CommonModule, RouterModule, BrowserModule, UserModule],
  exports:[MenuComponent]
})
export class MenuModule { }
