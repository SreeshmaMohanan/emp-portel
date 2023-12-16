import { Component, OnInit } from '@angular/core';
import { UserApiService } from '../modules/users/user-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  constructor(private api:UserApiService,private router:Router) { }
  ngOnInit(): void {
    if(localStorage.getItem("admin_name")){
      this.admin_name=localStorage.getItem("admin_name") || ""

    }
    this.employeeNum()
  }
  admin_name:string=""
  employeeCount:number=0
  selected: Date | null =new Date();
  showSidebar:boolean=true
  menuClick(){
    this.showSidebar=!this.showSidebar;
  }
  employeeNum(){
    this.api.getAllUserAPI().subscribe((res:any)=>{
      this.employeeCount=res.length

    })
    
  }
  logout(){
    localStorage.clear();
    this.router.navigateByUrl("")
  }
  getUpdateAdmin(event:any){
    this.admin_name=event
  }

}
