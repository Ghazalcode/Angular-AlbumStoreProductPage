import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Album } from './album';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductService {

  //creating variable to house album url
 private _albumUrl: string = '../assets/album.json';
  constructor(private _http:Http) {

  }

  //method to fetch all the album
  getAlbum(id: number):Observable<Album>{
    return this._http.get(this._albumUrl).map((response)=><Album>response.json());
  }

}
