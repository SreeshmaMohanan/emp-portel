import { Component, OnInit } from '@angular/core';
import { UserModel } from '../users.model';
import { UserApiService } from '../user-api.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent{
  user:UserModel={}
  constructor(private api:UserApiService,private router:Router,private toaster:ToastrService){}
  
 
addUser(){
  // console.log(this.user)
  this.api.addUserAPI(this.user).subscribe({
    next: (res:UserModel)=>{
      console.log(res);
     this.toaster.success("new user added successfully!!!")
      this.router.navigateByUrl('/users')
    
      

    },
    error:(err:any)=>{
      this.toaster.error(err.message)
    }
  })
  

}
cancel(){
  this.user={}
}

}
