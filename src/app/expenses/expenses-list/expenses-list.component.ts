import { Component, OnInit } from '@angular/core';
import { Category, Expense, ExpenseService } from 'src/app/api';

@Component({
  selector: 'app-expenses-list',
  templateUrl: './expenses-list.component.html'
})
export class ExpensesListComponent implements OnInit {
  expenses: Expense[] = [];
  categories: Category[] = [];
  categoryService: any;

  constructor(
    private expenseService: ExpenseService
  ) {}

  ngOnInit(): void {
    this.loadExpenses();
    this.loadCategories();
  }

  loadExpenses() {
    this.expenseService.expensesGet().subscribe(data => this.expenses = data);
  }

  loadCategories() {
    this.categoryService.getCategories().subscribe(data => this.categories = data);
  }

  getCategoryName(categoryId: number | undefined): string {
    const cat = this.categories.find(c => c.id === categoryId);
    return cat ? cat.name : '';
  }

  deleteExpense(id?: number) {
    if (id && confirm('Delete this expense?')) {
      this.expenseService.expensesIdDelete(id).subscribe(() => this.loadExpenses());
    }
  }
}