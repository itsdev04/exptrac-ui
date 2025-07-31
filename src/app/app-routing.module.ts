import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ExpensesListComponent } from './expenses/expenses-list/expenses-list.component';
import { ExpenseFormComponent } from './expenses/expense-form/expense-form.component';
import { CategoriesListComponent } from './categories/categories-list/categories-list.component';
import { ReportsComponent } from './reports/reports.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'expenses', component: ExpensesListComponent },
  { path: 'expenses/new', component: ExpenseFormComponent },
  { path: 'categories', component: CategoriesListComponent },
  { path: 'reports', component: ReportsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}