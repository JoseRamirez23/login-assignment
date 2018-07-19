import { Component, OnInit } from '@angular/core';
import { ChangeService } from './change.service';
import { Router } from './../../node_modules/@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  
  constructor(private changeService:ChangeService, private router:Router){}
  changeLogin(){
    this.changeService.next = false;
    this.router.navigate(['register']);
  }

  login(){
    this.changeService.next = false;
    this.router.navigate(['login']);
    
  }

  ngOnInit(){}
}
