import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'AuditManagementSystem';
  loggedin=false
  constructor(private loginservice:LoginService ,private router: Router) { }

  ngOnInit(): void {
    
    if(this.loginservice.isUserLoggedIn())
    {
      console.log(this.loginservice.isUserLoggedIn())
      this.loggedin=this.loginservice.isUserLoggedIn()
    }
    
  }
  logout()
{

  this.loginservice.logOut()
  location.reload()
  this.router.navigate(['/login'])

}

}
