export enum TypePublication{
  TEXT,VIDEO,PHOTO
}

export class publication{
  idPub!: number
  content!:string
  nbrcomment!:number
  image!: string
  pubDate!: Date
  typePublication!:TypePublication


}
