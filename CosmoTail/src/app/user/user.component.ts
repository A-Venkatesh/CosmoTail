import{User} from './../user';


import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';


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
  constructor(private _userService:UserService) { }

  ngOnInit() {
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
}
