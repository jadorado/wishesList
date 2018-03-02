import { Component, OnInit } from '@angular/core';
import { wishesListService } from '../../app/services/wishes-list.service';
import { AddPage } from '../add/add';
import { DetailPage } from '../detail/detail';

import { NavController } from 'ionic-angular';
import { Lists } from '../../app/classes/lists';

@Component({
  selector: 'app-pending',
  templateUrl: 'pending.component.html',
})

export class PendingComponent implements OnInit {
  constructor( private _wishesList: wishesListService,
               private _navController: NavController) {
  }

  ngOnInit() {}

  goAdd() {
    this._navController.push(AddPage);
  }

  viewDetail(list: Lists, index) {
    this._navController.push(DetailPage, {
      list,
      index
    })
  }
}
