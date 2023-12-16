import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserApiService } from '../user-api.service';
import { UserModel } from '../users.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit{
user:UserModel = {}
  constructor(private route:ActivatedRoute , private api:UserApiService, private router:Router,private toaster:ToastrService){}

  ngOnInit(): void {
    this.route.params.subscribe((res:any)=>{
      // console.log(res);
      const {id}=res
      //api call to get details of id 
      this.getExistingUser(id)
      
    })
  }
  getExistingUser(id:any){
    this.api.viewUserAPI(id).subscribe((res:any)=>{
      // console.log(res);
      this.user=res

      
    })
  }
  editUser(id:any){
    this.api.updateUserAPI(id,this.user).subscribe({
      next:(res:any)=>{
        this.toaster.success("user updated successfully")
        this.router.navigateByUrl('/users')
      
      },
      error:(err:any)=>{
        this.toaster.error(err.error)
      }
    })
  }


}
