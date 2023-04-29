import { Component } from '@angular/core';
import {PublicationService} from "../../Services/publication.service";
import {Router} from "@angular/router";
import {publication} from "../../../assets/Models/publication";
//import { TypePublication } from 'path/to/TypePublication';

@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrls: ['./addpost.component.css']
})
export class AddpostComponent {
  pub:publication= new publication();
 constructor(private service:PublicationService, private router:Router) {
 }
 public addpost(){
   this.service.addPublication(this.pub).subscribe(()=>this.router.navigateByUrl("user/post"))
 }

  /*
  ///upload img
  public onFileSelected(event: any) {
    const file: File = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      this.pub.content = reader.result as string;
    };
    reader.readAsDataURL(file);
  }
  public addpost(){
    if (this.pub.typePublication === TypePublication.PHOTO) {
      const formData = new FormData();
      formData.append('image', this.pub.content);
      this.pub.content = ''; // Reset content to avoid sending it twice
      this.service.addPublicationWithImage(formData, this.pub).subscribe(() => this.router.navigateByUrl("user/post"));
    } else {
      this.service.addPublication(this.pub).subscribe(() => this.router.navigateByUrl("user/post"));
    }
  }

   */
}
