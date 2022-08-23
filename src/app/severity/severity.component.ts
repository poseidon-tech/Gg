import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChecklistService } from '../checklist/checklist.service';
import { AuditResponse } from '../models/audit-response';
import { AuthResponse } from '../models/auth-response';
import { ProjectDetails } from '../models/project-details';
import { AuditManagementService } from '../service/audit-management.service';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-severity',
  templateUrl: './severity.component.html',
  styleUrls: ['./severity.component.css']
})
export class SeverityComponent implements OnInit {
  projectDetails :ProjectDetails=new ProjectDetails();
  auditResponse: AuditResponse=new AuditResponse();
  

  constructor(private audit:AuditManagementService ,private router: Router ,private route: ActivatedRoute,private loginService: LoginService,private checklistService:ChecklistService) { 
    
  }

  ngOnInit(): void {
    if(this.checklistService.questions.length==0)
    {
      this.router.navigate(['checklistType'])
    }
    this.valid();
    
  }
  showResult()
  { 
    this.audit.validateToken().subscribe(
      response=>{
        if(response.valid==false)
        {
          console.log("token expired")
        localStorage.removeItem("token")
        this.router.navigate(['loginAgain'])
        }
    this.audit.auditSeverity(this.projectDetails).subscribe(
      respsonse=>{
      this.auditResponse=respsonse
      console.log(respsonse)
      
      },
      error=>
      {
        
        console.log(error);

      }
    )},error=>{})

  }
  valid()
  {
    this.audit.validateToken().subscribe(
      response=>{this.projectDetails=response
      console.log(this.projectDetails)},
      error=>
      {
        console.log(error)
      }
    ,()=>
    {
    this.showResult();
    })
  }
query()
{
  this.router.navigate(['checklistType'])
}
}
