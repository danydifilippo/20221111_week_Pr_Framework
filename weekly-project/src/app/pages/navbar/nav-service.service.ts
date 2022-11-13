import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Music } from '../Music';

@Injectable({
  providedIn: 'root'
})
export class NavServiceService {

  constructor(private http:HttpClient) { }

  postMusic(obj:Music){
    return this.http.post<Music[]>(environment.urlApi+'navbar',obj)
  }

  getArtist(artist:string){
    return this.http.get(environment.urlApiMusic+artist)
  }
}
