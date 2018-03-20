import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';



import { AppComponent } from './app.component';
import { DatabindComponent } from './databind/databind.component';
import { ExeperienceComponent } from './exeperience/exeperience.component';
import { EducationComponent } from './education/education.component';
import { MenuComponent } from './menu/menu.component';
import { MenuItemComponent } from './menu-item/menu-item.component';

import { UserService } from './services/user.service';



@NgModule({
  declarations: [
    AppComponent,
    DatabindComponent,
    ExeperienceComponent,
    EducationComponent,
    MenuComponent,
    MenuItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
