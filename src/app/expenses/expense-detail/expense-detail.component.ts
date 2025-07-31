import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExpenseService, Expense, CategoryService, Category } from '../../api';

@Component({
  selector: 'app-expense-detail',
  templateUrl: './expense-detail.component.html'
})
export class ExpenseDetailComponent implements OnInit {
  expense?: Expense;
  categories: Category[] = [];

  constructor(
    private expenseService: ExpenseService,
    private categoryService: CategoryService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.categoryService.categoriesGet().subscribe(data => this.categories = data);

    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.expenseService.expensesIdGet(+id).subscribe(data => this.expense = data);
    }
  }

  getCategoryName(categoryId: number | undefined): string {
    const cat = this.categories.find(c => c.id === categoryId);
    return cat ? cat.name : '';
  }
}