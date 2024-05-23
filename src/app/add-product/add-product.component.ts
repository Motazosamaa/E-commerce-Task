// src/app/add-product/add-product.component.ts
import { Component, EventEmitter, Output } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent {
  @Output() productAdded = new EventEmitter<Product>();

  newProduct: Product = {
    name: '',
    image: '', 
    price: 0,
    description: ''
  };

  selectedFile: File | null = null;

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
   
  }

  addProduct() {
    
    if (this.selectedFile) {
      const reader = new FileReader();
      reader.onload = () => {
        this.newProduct.image = reader.result as string;
        this.productAdded.emit({ ...this.newProduct });
        this.resetForm();
      };
      reader.readAsDataURL(this.selectedFile);
    } else {
      
      this.productAdded.emit({ ...this.newProduct });
      this.resetForm();
    }
  }

  resetForm() {
    this.newProduct = {
      name: '',
      image: '',
      price: 0,
      description: ''
    };
    this.selectedFile = null;
  }
}
