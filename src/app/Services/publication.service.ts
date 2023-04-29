import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {publication} from "../../assets/Models/publication";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PublicationService {


  constructor(private http:HttpClient) { }
 public getpublication():Observable<publication[]>{
    return this.http.get<publication[]>("http://localhost:8088/Publication/retrieve-all-Publication")
 }
  //add Post
  public addPublication(pub:publication){
    return this.http.post<publication>("http://localhost:8088/Publication/add-publication ",pub);
  }


}
