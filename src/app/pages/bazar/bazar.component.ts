import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bazar',
  templateUrl: './bazar.component.html',
  styleUrls: ['./bazar.component.css']
})
export class BazarComponent implements OnInit {
  cartProducts: any[] = [];
  subTotal: number = 0;
  searchTerm: string = '';
  products: any[] = [];
  filteredProducts: any[] = [];
  showBazarSubmenu = false;
  showJuguetesSubmenu = false;
  showRopaSubmenu = false;
  showZapatillaSubmenu = false;

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.loadProducts();
    this.loadCart();
  }

  loadCart() {
    this.subTotal = 0;
    this.productService.getCartItemsByCustId(1).subscribe((res: any) => {
      this.cartProducts = res.data;
      this.cartProducts.forEach(element => {
        this.subTotal += element.productPrice;
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

  toggleBazarSubmenu() {
    this.showBazarSubmenu = !this.showBazarSubmenu;
  }
  
  toggleJuguetesSubmenu() {
    this.showJuguetesSubmenu = !this.showJuguetesSubmenu;
  }
   
  toggleRopaSubmenu() {
    this.showRopaSubmenu = !this.showRopaSubmenu;
  }

  toggleZapatillaSubmenu() {
    this.showZapatillaSubmenu = !this.showZapatillaSubmenu;
  }

  redirectToSale() {
    this.router.navigateByUrl('/sale'); 
  }
}


