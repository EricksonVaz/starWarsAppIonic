import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

const FAVORITE_FILMS_KEY = "favoriteFilms";
@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  constructor(private storage:Storage) { }

  getAllFavoriteFilms(){
    return this.storage.get(FAVORITE_FILMS_KEY);
  }

  isFavorited(id){
    return this.getAllFavoriteFilms().then((resp:any[])=>{
      return resp && resp.indexOf(id) != -1;
    })
  }

  favoritedFilm(id){
    return this.getAllFavoriteFilms().then((resp:any[])=>{
      console.log(resp)
      if(resp){
        resp.push(id);
        return this.storage.set(FAVORITE_FILMS_KEY,resp);
      }else{
        return this.storage.set(FAVORITE_FILMS_KEY,[id]);
      }
    });
  }

  unFavoriteFilm(id){
    return this.getAllFavoriteFilms().then((result:any[])=>{
      let index = result.indexOf(id);
      result.splice(index,1)
      return this.storage.set(FAVORITE_FILMS_KEY,result);
    });
  }
}
