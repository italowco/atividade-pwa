import { Component, OnInit } from '@angular/core';
import { CategoriesService } from './categories.service';
import { Observable, of } from 'rxjs';
import { Category } from '../model/category';
import { SwPush } from '@angular/service-worker';
import { NewsletterService } from '../services/newsletter.service';

@Component({
  selector: 'categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  categories: Observable<Category[]> = new Observable<Category[]>();

  constructor(
    private categoriesService: CategoriesService,
    private swPush: SwPush,
    private newsletterService: NewsletterService
  ) {}

  ngOnInit() {
    this.loadCategories();
  }

  loadCategories() {
    this.categories = this.categoriesService.loadAll();
  }

}
