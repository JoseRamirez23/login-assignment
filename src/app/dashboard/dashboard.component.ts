import { Component, OnInit } from '@angular/core';
import { Router } from './.././../../node_modules/@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  areYouSure(){
    if(confirm('Are you sure you want to log out?')){
      this.router.navigate(['app']);
    }
  }

}
