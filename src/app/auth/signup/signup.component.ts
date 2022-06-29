import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  apiData = {
    name: 'tes',
    phone: '46545346',
  };

  constructor() {
    console.log("1-conatrcutor")
  }

  ngOnInit(): void {
    console.log("2-ngOnInit")
  }

  submit(e:any){
    e.preventDefault()
    this.apiData.name="test edited"
  }

  
}
