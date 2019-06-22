import{User} from './../user';

import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import { Validators } from '@angular/forms';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  //profileForm: FormGroup;
 
  profileForm = new FormGroup({
    email: new FormControl('',[Validators.required,Validators.email]),
    name: new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(18)]),
    password: new FormControl('',[Validators.required,Validators.minLength(6)]),
    confirmPassword: new FormControl('',[Validators.required]),
    age: new FormControl('',[Validators.pattern('[0-9]*'),Validators.min(18)]),
    phoneNum: new FormControl('',[Validators.pattern('[0-9]*'),Validators.minLength(10),Validators.maxLength(10)])
  })
public user= new User();
private userError:User;
private isCreated:boolean=false;
private userExist:boolean=false;


constructor(private _userService:UserService) { }



  

  ngOnInit() {

    this.isCreated=this.profileForm.valid;

    // this.profileForm = this.fb.group({
    //   email: new FormControl('',[Validators.required,Validators.email]),
    //   name: ['',Validators.maxLength(18),Validators.min(3)],
    //     password: ['',Validators.required,Validators.minLength(6)],
    //     confirmPassword: ['',Validators.required],
    //     age: ['',Validators.min(18)],
    //     phoneNum: ['',Validators.minLength(10)]
     
    // });
  }
 get f() { return this.profileForm.controls; }
  createUser(){
    alert(JSON.stringify([this.profileForm.value,this.profileForm.valid]))
    this._userService.createUser(this.user).subscribe(
      data=>{
        console.log(data);
      },
      error=>{
        console.log(error);
        
      }
    )
  }
}
