import { Component } from '@angular/core';
import { Category } from 'src/app/shared/models/category';
import { CategoryService } from 'src/app/services/category/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {

  categories: Category[] = [];

  constructor(private categoryService: CategoryService) {

  }

  ngOnInit(): void{
    this.getAllCategory();
  }

  getAllCategory(): void{
    this.categories = this.categoryService.getAll()
  }

}
