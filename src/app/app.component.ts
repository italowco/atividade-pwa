import { Component, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Product } from './model/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'loja-pwa';

  products: Observable<Product[]> = new Observable<Product[]>();

  sub!: PushSubscription;

  readonly VAPID_PUBLIC_KEY =
    'BCNs_3XGu8P0UZsrHTJyKL14PEf_qtGEx2sXE5tCEs1GOMR3qgdaTZXAFSee6FRvVYAVCyCAX-Hi9f2GGC2MXQY';

  constructor(
  ) {}

  ngOnInit() {}



}
