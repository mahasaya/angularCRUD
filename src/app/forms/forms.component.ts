import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import {Validators} from '@angular/forms'
import { findIndex, from } from 'rxjs';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {

  //const emailPattern = "/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/"; 
  tableData:any=[];

  userForm: FormGroup = new FormGroup({
    //id : new FormControl(this.tableData),
    name:new FormControl('',[ Validators.required,Validators.minLength(3)]),
    email: new FormControl('',[Validators.email, Validators.required]),
    Date: new FormControl('', Validators.required),
    Describe: new FormControl('', [Validators.required,Validators.maxLength(20)]), 
  });
  
 

  onSaveUser(){
    console.log(this.userForm)
    if(this.userForm.invalid){
      
      console.error('ehrror');
      this.userForm.reset();
      return;
      
      
    }
    else{
      let obj = this.userForm.value;
      console.log("hello");
      sessionStorage.setItem('obj', JSON.stringify(obj));
      //console.log(this.userForm)
      //this.tableData  = this.dataRetrival();
      console.log("hello");
      this.dataRetrival();
      
      this.userForm.reset();

    }

   
  }


  dataRetrival(){
    const formData = JSON.parse(sessionStorage.getItem('obj')!);
     //this.tableData=  JSON.parse(sessionStorage.getItem('obj')!);
    this.tableData.push(formData) 
    console.log(this.tableData)
    
    return this.tableData;

  }

  rowData(){
  let n = this.tableData;
  console.log(n)
  console.log("hi")
  
  }

  deleteData(){

  }

  fetchData(){
    const divTable = document.querySelector('.table');
    const  rows = divTable?.querySelectorAll('.row');
    console.log(rows)
    if(rows){

    }

    
  }


}
