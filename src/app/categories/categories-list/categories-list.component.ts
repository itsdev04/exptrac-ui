import { Component, OnInit } from '@angular/core';
import { CategoryService, Category } from '../../api';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html'
})
export class CategoriesListComponent implements OnInit {
  categories: Category[] = [];

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories() {
    this.categoryService.categoriesGet().subscribe(data => this.categories = data);
  }

  deleteCategory(id?: number) {
    if (id && confirm('Delete this category?')) {
      this.categoryService.categoriesIdDelete(id).subscribe(() => this.loadCategories());
    }
  }
}