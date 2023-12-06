import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NameService {

  constructor() { }
  async fetchUser(){
      let data = await fetch('https://mern-i.onrender.com/users/')
      let response = await data.json()
      return response
    }
}
