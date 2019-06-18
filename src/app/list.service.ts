import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  private list: {name: string, id: number, date: Date}[] = [];
  constructor() { }

  getList(){
    if(!this.list || !this.list.length){
    for(let i = 0; i < 10; i++){
      this.list .push({
        name: 'Rafa ' + i,
        id: i,
        date: new Date()
      })
    }
  }
    return this.list;
  }
}
