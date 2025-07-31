import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService, Category } from '../../api';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html'
})
export class CategoryFormComponent implements OnInit {
  category: Category = { name: '' };
  isEdit = false;

  constructor(
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEdit = true;
      //this.categoryService.(+id).subscribe(data => this.category = data);
    }
  }

  onSubmit() {
    if (this.isEdit && this.category.id) {
      this.categoryService.categoriesIdPut(this.category.id, this.category).subscribe(() => {
        this.router.navigate(['/categories']);
      });
    } else {
      this.categoryService.categoriesPost(this.category).subscribe(() => {
        this.router.navigate(['/categories']);
      });
    }
  }
}