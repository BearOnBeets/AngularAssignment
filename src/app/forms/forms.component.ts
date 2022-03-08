import { Component, OnInit } from '@angular/core';
import { User } from './user';


@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  userModel=new User('Keyur','Malad','keyur@gmail.com',1234567890,new Date(Date.now()))

  constructor() { }
  topicHasError = true;
  submitted = false;
  errorMsg = '';

  validateTopic(value:any) {
    if (value === 'default') {
      this.topicHasError = true;
    } else {
      this.topicHasError = false;
    }
  }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.userModel)
  }

}
