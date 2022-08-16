import { Injectable } from '@angular/core';
import { ProjectDetails } from '../models/project-details';

@Injectable({
  providedIn: 'root'
})
export class ProjectDetailsService {
  projectDetails:ProjectDetails=new ProjectDetails()
  constructor() { }
}
