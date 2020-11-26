import { Component, OnInit, ViewChild } from '@angular/core';
import { UserdataService } from '../userdata.service';
import { Router } from '@angular/router';
import { UserPanelComponent } from '../user-panel/user-panel.component';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
username; password;
userId = '';

  constructor( private Userdata: UserdataService, private router:Router) { }

  ngOnInit() {
  }

onLogIn() {
  if(this.password.length<8)
  {
    alert('Password is incorrect or Empty.');
  }
  else if (this.username === 'admin@admin.com' && this.password === '123456789') {
    this.router.navigate(['/admin-panel']);
  }
  else if (this.username === 'user@user.com' && this.password === '123456789') {
    this.router.navigate(['/user-panel']);
  }
  else {
  for (const iterator of this.Userdata.userdata)
   {
    if ((iterator.username === this.username) && (iterator.password === this.password))
     {
      this.userId = iterator.UserId;
      this.router.navigate(['/user-panel']);
      break
      }
      else {
        alert('INCORRECT PASSWORD!');
    
    }
    
  }
 
  }
  
}
  

}





