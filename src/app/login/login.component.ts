import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthRequest } from '../models/auth-request';
import { ProjectDetails } from '../models/project-details';
import { AuditManagementService } from '../service/audit-management.service';
import { LoginService } from '../service/login.service';
import { ProjectDetailsService } from '../service/project-details.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  authreq :AuthRequest=new AuthRequest()
  projectDetail: ProjectDetails=new ProjectDetails()
  

  constructor(private audit:AuditManagementService ,private router: Router ,private route: ActivatedRoute,private loginService: LoginService,private project:ProjectDetailsService) { }

  ngOnInit(): void {
  }
  onSubmit()
  {
    console.log("Given login credentials are:"+this.authreq.username+" "+this.authreq.password);

    this.login();
  }
  login()
  {
    this.audit.generateToken(this.authreq).subscribe(
      response=>{
      console.log(response)
      this.loginService.login(response);
      
      window.location.href="checklistType" // this will reload the  page,used it to refresh navbar 
      
      },
      error=>
      {
        window.alert("Invalid username or password")
        console.log(error);

      }
    )
  }

}