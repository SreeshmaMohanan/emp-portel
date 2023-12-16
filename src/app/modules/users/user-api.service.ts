import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserModel } from './users.model';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {
SERVER_URL="https://emp-server-h70m.onrender.com"
  constructor(private http:HttpClient) { }
  addUserAPI(user:UserModel){
    return this.http.post(`${this.SERVER_URL}/users`,user)

  }
  //get all users
  getAllUserAPI(){
    return this.http.get(`${this.SERVER_URL}/users`)
  }
  //deleteuser
  deleteUserAPI(id:string){
    return this.http.delete(`${this.SERVER_URL}/users/${id}`)
  }
  //edit user 
  viewUserAPI(id:any){
    return this.http.get(`${this.SERVER_URL}/users/${id}`)
  }
   //update user api
 updateUserAPI(id:any,user:UserModel){
  return this.http.put(`${this.SERVER_URL}/users/${id}`,user)

 }
}
