import { Pipe, PipeTransform } from '@angular/core';
import { Lists } from '../../app/classes/lists';

@Pipe({
  name: 'pendings',
  pure: false
})
export class PendingsPipe implements PipeTransform {

  transform(lists: Lists[], state: boolean = false): Lists[] {
    let newList: Lists[] = [];

    for(let list of lists) {
      if(list.completed === state) {
        newList.push(list);
      }
    }

    return newList;
  }
}
