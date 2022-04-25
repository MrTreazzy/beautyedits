import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { BeautyeditsComponent } from './beautyedits/beautyedits.component';
import { SubsComponent } from './subs/subs.component';
import { AccountComponent } from './account/account.component';
import { ContactusComponent } from './contactus/contactus.component';

const routes: Routes = [
  {path:'', component:BeautyeditsComponent},
  {path:'reg', component:RegistrationComponent},
  {path:'home', component:BeautyeditsComponent},
  {path:'subs', component:SubsComponent},
  {path:'account', component:AccountComponent},
  {path:'contactus', component:ContactusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
