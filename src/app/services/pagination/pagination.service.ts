import {EventEmitter, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaginationService {

  constructor() { }

  getShownPages(currentPage: number, numberOfPages: number) {
    const shownPages = [];

    if (numberOfPages > 5) {
      if (currentPage < 5) {
        for (let i = 1; i <= 5; i++) {
          shownPages.push(i);
        }
      } else if (numberOfPages - currentPage < 4) {
        for (let i = numberOfPages - 4; i <= numberOfPages; i++) {
          shownPages.push(i);
        }
      } else {
        for (let i = currentPage - 2; i <= currentPage + 2; i++) {
          shownPages.push(i);
        }
      }
    } else {
      for (let i = 1; i <= numberOfPages; i++) {
        shownPages.push(i);
      }
    }

    return shownPages;
  }
}
