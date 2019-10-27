import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PaginationService} from '../../../services/pagination/pagination.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.sass']
})
export class PaginationComponent implements OnInit {

  @Input() public currentPage = 1;
  @Input() public numberOfPages;
  @Output() public changePageEmitter: EventEmitter<number> = new EventEmitter<number>();
  public shownPages = [];
  public isPrevExist: boolean;
  public isNextExist: boolean;

  constructor(private paginationService: PaginationService) { }

  ngOnInit() {
    this.setShownPage();
    this.setPrevAndNextExisting();
  }

  changePage(page: number): void {
    if (this.currentPage === page) {
      return;
    }

    this.currentPage = page;
    this.setPrevAndNextExisting();

    this.changePageEmitter.next(page);
  }
  setShownPage(): void {
    this.shownPages = this.paginationService.getShownPages(this.currentPage, this.numberOfPages);
  }
  setPrevAndNextExisting(): void {
    this.isPrevExist = false;
    this.isNextExist = false;

    if (this.currentPage !== 1) {
      this.isPrevExist = true;
    }
    if (this.currentPage !== this.numberOfPages) {
      this.isNextExist = true;
    }
  }
}
