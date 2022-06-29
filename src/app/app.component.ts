import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})

export class AppComponent implements OnInit {
  title = 'my-app';

  count=0;
  toDolist:any[]=[]
  name=''
  email=''
  number=0
  errname=""
  ngOnInit(): void {
    console.log("i am initialized")
  }

  incrementCount(){
    this.count++
  }

  decrementCount(){
    this.count--
  }

  addItemsToList(event:any){
    event.preventDefault()
    let item={
      name:this.name,
      email:this.email,
      number:this.number
    }

    this.toDolist.push(item)
    
  }

clearvalidation(){
  // this.errname=""
}

  sumbitForm(){

  }

  editForm(e:any){
    // this.[e.target.name]=e.target.value
    if(e.target.name=="name"){
      this.name=e.target.value
    }

    if(e.target.name=="email"){
      this.email=e.target.value
    }

    if(e.target.name=="number"){
      this.number=e.target.value
    }

  }
  


}
