export enum TypePublication{
  TEXT,VIDEO,PHOTO
}

export class publication{
  idPub!: number
  content!:string
  nbrcomment!:number
  pubDate!: Date
  typePublication!:TypePublication


}
