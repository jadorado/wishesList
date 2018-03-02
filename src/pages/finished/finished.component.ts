import { Component, OnInit } from '@angular/core';
import { wishesListService } from '../../app/services/wishes-list.service';
import { DetailPage } from '../detail/detail';

import { NavController } from 'ionic-angular';
import { Lists } from '../../app/classes/lists';

@Component({
  selector: 'app-finished',
  templateUrl: 'finished.component.html',
})

export class FinishedComponent implements OnInit {
  constructor( private _wishesList: wishesListService,
               private _navController: NavController) {
  }

  ngOnInit() {}

  viewDetail(list: Lists, index) {
    this._navController.push(DetailPage, {
      list,
      index
    })
  }
}
