import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChecklistComponent } from './checklist/checklist.component';
import { HomeComponent } from './home/home.component';
import { LoginAgainComponent } from './login-again/login-again.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './service/auth.guard';
import { SeverityComponent } from './severity/severity.component';

const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:'full'},
  {path:"home",component:HomeComponent},
  {path:"login",component:LoginComponent},
  {path:"checklistType",component:ChecklistComponent,canActivate:[AuthGuard]},
  {path:"severity",component:SeverityComponent,canActivate:[AuthGuard]},
  {path: 'loginAgain', component:LoginAgainComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
