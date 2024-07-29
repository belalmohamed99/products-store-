import { AppModule } from './app.module';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from './modules/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [];
  private productsSubject: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>(this.products);

  getProducts(): Observable<Product[]> {
    return this.productsSubject.asObservable();
  }

  addProduct(product: Product): void {
    product.id = this.products.length ? Math.max(...this.products.map(p => p.id!)) + 1 : 1;
    this.products.push(product);
    this.productsSubject.next(this.products);
  }
}
