import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';


@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Input()
  page: number = 1; // trenutna stranica
  
  @Input()
  pageSize: number = 10;

  @Input()
  collectionSize: number = 0; // ukupan broj restorana

  @Output()
  onPageChanged = new EventEmitter<number>();

  pages: number[] = []; // lista [1, 2, 3...] za prikaz brojeva strana


  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    // ugradjena u angular, nalik ngOnInit
    // poziva se kada dodje do promene u vrednostima Input-a
    this.pages = [];
    for(let i=1; i<=this.getNoPages(); i++){
      this.pages.push(i);
    }
  }

  
  getNoPages() :number{
    return Math.ceil(this.collectionSize/this.pageSize);
  }

  onPreviousClicked() {
    this.onPageChanged.emit(this.page - 1)
  }

  onNextClicked() {
    console.log(this.pages)
    this.onPageChanged.emit(this.page + 1)
  }

  pageSelected(pageNumber: number) {
    this.onPageChanged.emit(pageNumber)
  }

}
