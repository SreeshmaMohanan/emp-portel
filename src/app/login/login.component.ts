import { Component } from '@angular/core';
import { AdminApiService } from '../services/admin-api.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string =""
  password: string = ""
  constructor(private api:AdminApiService,private router:Router,private toaster:ToastrService) { }
  login() {
    if (this.email && this.password) {
     this.api.authenticate().subscribe({
      next:(res:any)=>{
        const {email,password}=res
        if(email===this.email && password===this.password){
          this.toaster.success("login success")
          //save admin details
          localStorage.setItem('admin_name',res.name)
          localStorage.setItem('admin_password',res.password)
          //navigate to dashboard
          this.router.navigateByUrl("dashboard")

        }else{
          this.toaster.error("invalid email/ password")
        }
      }
      
     })
      

    } else {
      this.toaster.warning("Please fill all fields");

    }

  }
}
