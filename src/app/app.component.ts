import { Component, OnInit } from '@angular/core';
import { ProductService } from './services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ecommerce';
  cartProducts: any[] = [];
  subTotal: number = 0;
  searchTerm: string = '';
  products: any[] = [];
  filteredProducts: any[] = [];
  showSubmenu: boolean = false;
  showBazarSubmenu: boolean = false;
  showJuguetesSubmenu: boolean = false;
  showRopaSubmenu: boolean = false; 
  showZapatillaSubmenu: boolean = false;
  

  constructor(private productService: ProductService, private router: Router) {
    this.productService.cartAddedSubject.subscribe(res => {
      this.loadCart();
    });
  }

  ngOnInit(): void {
    this.loadProducts();
    this.loadCart();
  }

  redirectToSale() {
    this.router.navigateByUrl('sale');
  }

  loadCart() {
    this.subTotal = 0;
    this.productService.getCartItemsByCustId(1).subscribe((res: any) => {
      this.cartProducts = res.data;
      this.cartProducts.forEach(element => {
        this.subTotal = this.subTotal + element.productPrice;
      });
    });
  }

  loadProducts() {
    this.productService.getAllProducts().subscribe((res: any) => {
      this.products = res.data;
    });
  }

  searchProducts() {
    if (this.searchTerm.trim() !== '') {
      this.filteredProducts = this.products.filter(product =>
        product.productName.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.filteredProducts = [];
    }
  }

  closeSearchResults() {
    this.filteredProducts = [];
  }

  toggleSubmenu() {
    this.showSubmenu = !this.showSubmenu;
  }

  toggleBazarSubmenu() {
    this.showBazarSubmenu = !this.showBazarSubmenu;
  }
  
  toggleJuguetesSubmenu() {
    this.showJuguetesSubmenu = !this.showJuguetesSubmenu;
  }
   
  toggleRopaSubmenu() {
    this.showRopaSubmenu = !this.showRopaSubmenu;
  }

  togglezapatillasSubmenu() {
    this.showZapatillaSubmenu = !this.showZapatillaSubmenu;
  }
}




