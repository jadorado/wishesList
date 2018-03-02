import { Injectable } from '@angular/core';
import { Lists } from '../classes/lists';
import {List} from 'ionic-angular';

@Injectable()
export class wishesListService {

  lists: Lists[] = [];

  constructor() {
    this.loadList();
  }

  updateList() {
    localStorage.setItem("data", JSON.stringify(this.lists));
  }

  loadList(){
    if(localStorage.getItem("data")) {
      this.lists = JSON.parse(localStorage.getItem("data"));
    }
  }

  addList(list: Lists) {
    this.lists.push(list);
    this.updateList();
  }

  removeList(index: number) {
    this.lists.splice(index, 1);
    this.updateList();
  }

}
