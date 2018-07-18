import { Component, OnInit } from '@angular/core';
import { ChangeService } from '../change.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private changeService:ChangeService) { }

  ngOnInit() {
  }
  cancel(){
    this.changeService.next=true;
  }

}
