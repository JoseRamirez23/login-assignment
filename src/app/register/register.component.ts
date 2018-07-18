import { Component, OnInit } from '@angular/core';
import { ChangeService } from '../change.service';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private changeService : ChangeService) { }

  ngOnInit() {
  }

  cancel(){
    this.changeService.next =true;
  }

}
