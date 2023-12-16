import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserModel } from '../modules/users/users.model';

@Injectable({
  providedIn: 'root'
})
export class AdminApiService {
SERVER_URL="https://emp-server-h70m.onrender.com"

  constructor(private http:HttpClient) { }
  authenticate(){
    //apicall to 3001 :http://localhost:3001/users/1
 return this.http.get(`${this.SERVER_URL}/users/1`)
  

  }
  updateAdmin(admin:any){
    return this.http.put(`${this.SERVER_URL}/users/1`, admin);
   }
 
}
