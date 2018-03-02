import { ItemList } from './item-list';

export class Lists {
  name: string;
  completed: boolean;
  items: ItemList[];

  constructor(name: string, ) {
    this.name = name;
    this.completed = false;
  }
}
