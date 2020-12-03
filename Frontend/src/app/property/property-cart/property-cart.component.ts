import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-cart',
  templateUrl: './property-cart.component.html',
  styleUrls: ['./property-cart.component.scss']
})
export class PropertyCartComponent implements OnInit {

  property: any = {
    "Id": 1,
    'Name': "HSPA",
    "type": "House",
    "price":12000
  }
  constructor() { }

  ngOnInit() {
  }

}
