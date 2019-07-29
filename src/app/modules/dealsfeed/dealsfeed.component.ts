import { Component, OnInit } from '@angular/core';

export interface Tile {
  url: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({  
  selector: 'app-dealsfeed',
  templateUrl: './dealsfeed.component.html',
  styleUrls: ['./dealsfeed.component.sass']
})
export class DealsfeedComponent  {

  tiles: Tile[] = [
    {text: 'One', cols: 1, rows: 1, url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/san-fransisco-768x432.jpg'},
    {text: 'Two', cols: 1, rows: 1, url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/san-fransisco-768x432.jpg'},
    {text: 'Three', cols: 1, rows: 1, url: 'https://cdn.thewirecutter.com/wp-content/uploads/2018/06/cataccessories-lowres-2x1-05916.jpg'},
    {text: 'Four', cols: 1, rows: 1, url: 'http://www.petmd.com/sites/default/files/what-does-it-mean-when-cat-wags-tail.jpg'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
