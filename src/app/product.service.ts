import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {

  //creating variable to house album url
 private _albumUrl:string = '../assets/album.json';
  constructor(private _http:Http) {

  }

  //method to fetch all the album
  getAlbum(id:number){
    return this._http.get(this._albumUrl).map((response)=>response.json());
  }

}
