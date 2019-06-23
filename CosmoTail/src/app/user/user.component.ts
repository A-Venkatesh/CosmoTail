import{User} from './../user';

import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
<<<<<<< HEAD
import { Validators } from '@angular/forms';
=======
import { FormGroup,Validators, FormBuilder, FormControl ,ReactiveFormsModule} from '@angular/forms';
import { ForbiddenNameValidator } from './shared/user-name.validator';
import { PasswordValidator } from './shared/password.validator';
>>>>>>> ad972da98259a133be08deed95ccffef2699d248


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

<<<<<<< HEAD

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
=======
registrationForm: FormGroup;
  constructor(private fb: FormBuilder,private _userService:UserService) { }

  ngOnInit() {

    
    this.registrationForm = this.fb.group({
      userName: ['', [Validators.required, Validators.minLength(3), ForbiddenNameValidator(/password/)]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(14)]],
      confirmPassword: ['', [Validators.required]],
      email: ['',Validators.required,Validators.email],
      age: ['',[Validators.min(10),Validators.max(60)]],
      phoneNum: ['',[Validators.minLength(10)]]
      
    }, { validator: PasswordValidator });

    this.registrationForm.get('subscribe').valueChanges
      .subscribe(checkedValue => {
        const email = this.registrationForm.get('email');
        if (checkedValue) {
          email.setValidators(Validators.required);
        } else {
          email.clearValidators();
        }
        email.updateValueAndValidity();
      });

>>>>>>> ad972da98259a133be08deed95ccffef2699d248
  }
 get f() { return this.profileForm.controls; }
  createUser(){
    alert(JSON.stringify([this.profileForm.value,this.profileForm.valid]))
    this._userService.createUser(this.profileForm.value).subscribe(
      data=>{
        console.log(data);
      },
      error=>{
        console.log(error);
        
      }
    )
  }


  get userName() {
    return this.registrationForm.get('userName');
  }

  get email() {
    return this.registrationForm.get('email');
  }
  get age() {
    return this.registrationForm.get('age');
  }

  get password() {
    return this.registrationForm.get('password');
  }
  get phNum() {
    return this.registrationForm.get('phoneNum');
  }
  get f() { return this.registrationForm.controls; }




}
