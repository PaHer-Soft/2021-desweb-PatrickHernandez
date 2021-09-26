import { Component, OnInit } from '@angular/core'

import { ItemService } from './item.service'

@Component({
  selector: 'ns-items',
  templateUrl: './items.component.html',
})
export class ItemsComponent implements OnInit {
  items: Object;

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.itemService.getItems().subscribe(
      response => {
        this.items = response.photos;
        console.dir(response);
      },
      error => console.log(error)
    );

  }
}