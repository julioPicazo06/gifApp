import {
  HttpClient,
  HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';

import {
  Gif,
  SearchResponce,
} from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  public gifList: Gif[] = [];
  private _tagHistory: string[] = [];
  private apiKey: string = 'YJppKt3ycwX4pavNSo39m0c7FKwwJBlg';
  private url: string = 'https://api.giphy.com/v1/gifs';

  constructor(private http:HttpClient) { }

  get tagsHistory(): string[] {
    return [...this._tagHistory];
  }

  private organizaHistory(tag:string): void {
    tag = tag.toLowerCase();
    if( this._tagHistory.includes(tag)){
      this._tagHistory = this._tagHistory.filter( oldTag => oldTag !== tag);
    }

    this._tagHistory.unshift(tag);
    this._tagHistory = this._tagHistory.splice(0,10);
  }

  searchTag(tag :string): void {
    if (tag.trim().length === 0) return;
    this.organizaHistory(tag);

    const params =  new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '10')
      .set('q', tag);


    this.http.get<SearchResponce>(`${this.url}/search`, {params})
    .subscribe(
      (res) => {
        this.gifList = res.data;
        console.log(this.gifList);

      }
    );

  }


}

