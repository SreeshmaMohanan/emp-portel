import { Component, OnInit } from '@angular/core';
import { UserApiService } from './user-api.service';
import { UserModel } from './users.model';
import jspdf from 'jspdf'
import autoTable from 'jspdf-autotable'
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{
  p:number=1
  searchKey:string=""
  allUsers:UserModel[]=[]

  constructor(private api:UserApiService,private toaster:ToastrService){}
  //apikittan 
  ngOnInit(): void {
    this.getallUsers()

    
  }
 // /get all users

  getallUsers(){
    console.log("inside users");
    this.api.getAllUserAPI().subscribe({
      next: (res:any)=>{
        console.log(res);
        this.allUsers=res
      },
      error:(err:any)=>{
        this.toaster.error(err.message)
  
      }
    })
    
  
  }
  //delete user
  
  removeUser(id:any){
    this.api.deleteUserAPI(id).subscribe({
      next:(res:any)=>{
        console.log(res);
        this.toaster.success("User removed Successfully")
        this.getallUsers()
      },
      error:(err:any)=>{
        this.toaster.error(err.message)
  
      }

    })
  }
  // sort 
  sortById(){
    this.allUsers.sort((a:any,b:any)=>a.id-b.id)
  }
  sortByName(){
    this.allUsers.sort((a:any,b:any)=>a.name.localeCompare(b.name))

  }
  generatePdf(){
    let pdf= new jspdf()
    let head=[['Id','UserName','Email','Status']]
    let body:any=[]
    this.allUsers.forEach((item:any)=>{
      body.push([item.id,item.name,item.email,item.status])
    })
    pdf.setFontSize(16)
    pdf.text("All Userss List",10,10)
    autoTable(pdf,{head,body})
    pdf.output('dataurlnewwindow')
    pdf.save('allusersList.pdf')
  }

  }