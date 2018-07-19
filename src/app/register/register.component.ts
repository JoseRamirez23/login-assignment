import { Component, OnInit } from '@angular/core';
import { ChangeService } from '../change.service';
import { Router } from './../../../node_modules/@angular/router';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private changeService : ChangeService, private router:Router) { }

  ngOnInit() {
  }

  cancel(){
    this.changeService.next =true;
    this.router.navigate(['app']);
  }
  confirm(){
    this.router.navigate(['login']);
  }

}
