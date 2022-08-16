import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthRequest } from '../models/auth-request';
import { AuthResponse } from '../models/auth-response';
import { Question } from '../models/question';
import { LoginService } from './login.service';
import { AuditType } from '../models/audit-type';
import { ProjectDetails } from '../models/project-details';
import { ChecklistComponent } from '../checklist/checklist.component';
import { DatePipe } from '@angular/common';
import { ChecklistService } from '../checklist/checklist.service';
import { AuditResponse } from '../models/audit-response';
import { ProjectDetailsService } from './project-details.service';

@Injectable({
  providedIn: 'root'
})
export class AuditManagementService {
  
  private auth_url ="http://localhost:8100/auth"
  private checklist_url ="http://localhost:8200/checklist"
  private severity_url ="http://localhost:8300/severity"
  constructor(private httpClient: HttpClient,private loginService:LoginService,private checklistService:ChecklistService,private datePipe: DatePipe,private project:ProjectDetailsService) { }
    
    public generateToken(authreq:AuthRequest) 
    {
      return this.httpClient.post(this.auth_url+"/authenticate",authreq, { responseType: 'text' });   
    }  
    public validateToken() 
    {
      return this.httpClient.post<ProjectDetails>(this.auth_url+"/validate", {
        headers: new HttpHeaders().set("Authorization", "Bearer "+this.loginService.getToken)
      });   
    } 
    public auditcheckList(auditType:AuditType)
    {
      return this.httpClient.post<Question[]>(this.checklist_url+"/AuditCheckListQuestions",auditType)
    }
    public auditcheckListHealth()
    {
      return this.httpClient.get(this.checklist_url+"/health-check",{ responseType : 'text'})
    }

   public auditSeverity(projectDetails:ProjectDetails)
    {
     console.log(projectDetails.name)
    return this.httpClient.post<any>(this.severity_url+"/ProjectExecutionStatus", {
     "projectName" : projectDetails.name,
     "managerName": projectDetails.projectName,
     "auditDetail":{
       "auditType":this.checklistService.auditType.auditType,
       "auditDate":this.datePipe.transform(new Date(),"yyyy-MM-dd"),
        "auditQuestions":this.checklistService.questions,
     }
    })
  

  }
}
