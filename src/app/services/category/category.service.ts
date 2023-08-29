import { Injectable } from '@angular/core';
import { Category } from 'src/app/shared/models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  getCategoryById(id:number): Category{
    return this.getAll().find(category => category.id == id)!;
  }

  constructor() { }

  getAll(): Category[]{
    return[
      {
        id: 1,
        // name: 'Men',
        imageUrl: '/assets/Men.svg',
      },
      {
        id: 2,
        // name: 'Women',
        imageUrl: '/assets/Women.svg',
      },
      {
        id: 3,
        // name: 'Athletics',
        imageUrl: '/assets/Athletics.svg',
      },
    ]
  }
}
