import {Component, OnInit} from '@angular/core';
import {PublicationService} from "../../Services/publication.service";
import {publication, TypePublication} from "../../../assets/Models/publication";

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.css']
})
export class PublicationComponent implements OnInit{

listPub!: publication[];
  constructor(private service:PublicationService) { }
  ngOnInit(): void {
    this.service.getpublication().subscribe(listPub=>this.listPub=listPub);
  }
  TypePublication = TypePublication; // add this line to expose TypePublication to the template


}

//
