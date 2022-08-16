import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChecklistComponent } from './checklist/checklist.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './service/auth.guard';
import { SeverityComponent } from './severity/severity.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"checklistType",component:ChecklistComponent,canActivate:[AuthGuard]},
  {path:"severity",component:SeverityComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
