import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Check } from '../models/check';
import { AuditType } from '../models/audit-type';
import { Question } from '../models/question';
import { AuditManagementService } from '../service/audit-management.service';
import { LoginService } from '../service/login.service';
import { ChecklistService } from './checklist.service';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.css']
})
export class ChecklistComponent implements OnInit {

  questions: Question[] = [];
  checks: Check[]=[{isSelected:false},{isSelected:false},{isSelected:false},{isSelected:false},{isSelected:false}];
  auditType :AuditType= new AuditType()
  constructor(private audit:AuditManagementService ,private router: Router ,private route: ActivatedRoute,private loginService: LoginService,private checklistService:ChecklistService) { }

  ngOnInit(): void {
  }
  onSubmit()
  {
    console.log(this.auditType);
    for (var i = 0; i <this.checks.length; i++) {
      this.checks[i].isSelected=false;
    }
    this.checklist();
  }
  checklist()
  {
    let fetch : Question[] = [];
    this.audit.auditcheckList(this.auditType).subscribe(
      (questions:Question[])=>{
      fetch=questions
      console.log(questions)
      //this.router.navigate(['/employees']) this won't reload page
       
      },
      error=>
      {
       console.log(error) 
      },
      ()=>{
        
        this.questions =fetch
        
      }
    )
  }
  onSubmit1()
  {
    for (var i = 0; i <this.checks.length; i++) {
       if(this.checks[i].isSelected==true)
       {
        this.questions[i].response="YES"
       }
       else
       {
        this.questions[i].response="NO"
       }
      
  }
  this.checklistService.questions=this.questions
  this.checklistService.auditType=this.auditType

  this.router.navigate(['/severity'])

}

}