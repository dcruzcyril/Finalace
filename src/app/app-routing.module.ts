import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { BodyComponent } from './body/body.component';
import { BindingComponent } from './binding/binding.component';

import { ViewComponent } from './view/view.component';
import { DetailComponent } from './detail/detail.component';
import { LogoutComponent } from './logout/logout.component';
import { FantasyComponent } from './fantasy/fantasy.component';
import { SupernaturalComponent } from './supernatural/supernatural.component';


const routes: Routes = [
  {path:'Login',component:LoginComponent},
  {path:'body',component:BodyComponent},
  {path:'binding',component:BindingComponent},
  {path:'view',component:ViewComponent},
  {path:'detail',component:DetailComponent},
  {path:'logout',component:LogoutComponent},
  {path:'fantasy',component:FantasyComponent},
  {path:'supernatural',component:SupernaturalComponent},
  {path:'',redirectTo:'Login', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
