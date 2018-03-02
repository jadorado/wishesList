import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Lists } from '../../app/classes/lists';
import { ItemList } from '../../app/classes/item-list';
import { wishesListService } from '../../app/services/wishes-list.service';

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {

  index: number;
  list: Lists;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public _wishesListService: wishesListService,
              public alertCtrl: AlertController) {
    this.index = navParams.get("index");
    this.list = navParams.get("list");
  }

  updateItem(item: ItemList) {
    item.completed = !item.completed;
    let allChecked = true;
    for( let item of this.list.items ) {
      if(!item.completed) {
        allChecked = false;
        break;
      }
    }

    this.list.completed = allChecked;
    this._wishesListService.updateList();
  }

  deleteItem() {

    let alert = this.alertCtrl.create({
      title: this.list.name,
      message: 'Are you sure to delete it?',
      buttons: ['Cancel',
        {
          text: 'Delete',
          handler: () => {
            this._wishesListService.removeList(this.index);
            this.navCtrl.pop();
          }
        }
      ]
    });
    alert.present();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

}
