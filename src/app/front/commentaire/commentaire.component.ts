import {Component, OnInit} from '@angular/core';
import {PublicationService} from "../../Services/publication.service";
import {Router} from "@angular/router";
import {Location} from '@angular/common'
import {CommentaireService} from "../../Services/commentaire.service";
import {commentaire} from "../../../assets/Models/commentaire";
@Component({
  selector: 'app-commentaire',
  templateUrl: './commentaire.component.html',
  styleUrls: ['./commentaire.component.css']
})
export class CommentaireComponent implements OnInit{
  comment = new commentaire(0,"",new Date())
 message:any;
  constructor(private service:CommentaireService,private location: Location,private router:Router) { }


  ngOnInit(): void {
  }
  AddCommantaire(){
    let resp = this.service.addComment(this.comment);
    resp.subscribe((data) => {
      this.message = data;
      this.location.replaceState('/admin/badWr');
      location.reload();
    });
  }
}
