import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  @Input() fullIcon: string = "";
  @Input() emptyIcon: string = "";
  @Input() grade: number = 0;

  emptyArray = new Array();
  fullArray = new Array();

  constructor() { }

  ngOnInit(): void {
    this.fullArray = new Array(this.grade) // prazan niz duzine grade, za prikaz punih ikonica
    this.emptyArray = new Array(5-this.grade) // prazan niz duzine 5 - grade, za prikaz praznih
  }

}
