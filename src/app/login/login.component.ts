import { Component, OnInit } from '@angular/core';
import { ChangeService } from '../change.service';
import { Router } from './../../../node_modules/@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  confirm:any;
  constructor(private changeService:ChangeService, private router:Router) { }

  ngOnInit() {
    this.confirm=[{

      email:null,
      password:null
      
    }]
  }
  cancel(){
    this.changeService.next=true;
    this.router.navigate(['app']);
   
  }
  enter(){
    if(this.confirm.password && this.confirm.email){
      this.router.navigate(['dashboard']);
    }else{
      alert('You might be missing something');
    }
  }

}
