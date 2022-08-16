import { Injectable } from '@angular/core';
import { AuditType } from '../models/audit-type';
import { Question } from '../models/question';

@Injectable({
  providedIn: 'root'
})
export class ChecklistService {
  auditType :AuditType= new AuditType()
  questions: Question[] = [];
  constructor() { }
  saveQuestions(questions:Question[])
  {
    this.questions=questions
   
  }
//  public  getQuestions()
//   {
//     return this.questions;
//   }
//   public saveAudittype(auditType:AuditType)
//   {
//     this.auditType=auditType;
//   }
//   public getAudittype()
//   {
//     return this.auditType;
//   }
}
