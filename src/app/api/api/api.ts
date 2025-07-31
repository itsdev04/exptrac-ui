export * from './category.service';
import { CategoryService } from './category.service';
export * from './expense.service';
import { ExpenseService } from './expense.service';
export const APIS = [CategoryService, ExpenseService];
