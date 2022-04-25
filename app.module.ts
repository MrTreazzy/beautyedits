import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BeautyeditsComponent } from './beautyedits/beautyedits.component';
import { RegistrationComponent } from './registration/registration.component';
import { RouterModule, Routes } from '@angular/router';
import { SubsComponent } from './subs/subs.component';
import { AccountComponent } from './account/account.component';
import { ContactusComponent } from './contactus/contactus.component';

const appRoutes: Routes=[
  {path:'reg', component:RegistrationComponent},
  {path:'home', component:BeautyeditsComponent},
  {path:'subs', component:SubsComponent},
  {path:'account', component:AccountComponent},
  {path:'contactus', component:ContactusComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    BeautyeditsComponent,
    RegistrationComponent,
    SubsComponent,
    AccountComponent,
    ContactusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
