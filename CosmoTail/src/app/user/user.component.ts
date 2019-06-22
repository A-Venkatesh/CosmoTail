import{User} from './../user';


import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import { FormGroup,Validators, FormBuilder, FormControl ,ReactiveFormsModule} from '@angular/forms';
import { ForbiddenNameValidator } from './shared/user-name.validator';
import { PasswordValidator } from './shared/password.validator';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
public user= new User();
private userError:User;
private isCreated:boolean=false;
private userExist:boolean=false;

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

  }
  createUser(){
    this._userService.createUser(this.user).subscribe(
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
