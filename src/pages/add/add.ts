import { Component, OnInit } from '@angular/core';
import {IonicPage, Item, List, NavController, NavParams} from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Lists, ItemList } from '../../app/classes/index';
import { wishesListService } from '../../app/services/wishes-list.service';

@IonicPage()
@Component({
  selector: 'page-add',
  templateUrl: 'add.html',
})

export class AddPage implements OnInit{

  listName: string = "";
  itemName: string = "";

  items: ItemList[] = [];

  constructor(public navCtrl: NavController,
              public alertCtrl: AlertController,
              public _wishesListService: wishesListService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPage');
  }

  ngOnInit() {}

  add() {
    if(this.itemName.length == 0) {
      return ;
    }

    let item = new ItemList();
    item.name = this.itemName;

    this.items.push(item);
    this.itemName = "";
  }

  delete(i: number) {
    if(this.items.length == 0) {
      return ;
    }

    this.items.splice(i, 1);
  }

  saveList() {
    if(this.listName.length == 0) {
      let alert = this.alertCtrl.create({
        title: "List name",
        subTitle: "Name list can't be empty",
        buttons: ['OK']
      });
      alert.present();
      return ;
    }

    let list = new Lists(this.listName);
    list.items = this.items;

    this._wishesListService.addList(list);
    this.navCtrl.pop();
  }

}
