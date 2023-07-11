import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bazar',
  templateUrl: './bazar.component.html',
  styleUrls: ['./bazar.component.css']
})
export class BazarComponent implements OnInit {
 

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    
  }

 
}


