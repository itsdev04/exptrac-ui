import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExpenseService, Expense, CategoryService, Category } from '../../api';

@Component({
  selector: 'app-expense-form',
  templateUrl: './expense-form.component.html'
})
export class ExpenseFormComponent implements OnInit {
  expense: Expense = { date: '', amount: 0, categoryId: 0, description: '' };
  categories: Category[] = [];
  isEdit = false;

  constructor(
    private expenseService: ExpenseService,
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.categoryService.categoriesGet().subscribe(data => this.categories = data);

    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEdit = true;
      this.expenseService.expensesIdGet(+id).subscribe(data => this.expense = data);
    }
  }

  onSubmit() {
    if (this.isEdit && this.expense.id) {
      this.expenseService.expensesIdPut(this.expense.id, this.expense).subscribe(() => {
        this.router.navigate(['/expenses']);
      });
    } else {
      this.expenseService.expensesPost(this.expense).subscribe(() => {
        this.router.navigate(['/expenses']);
      });
    }
  }
}