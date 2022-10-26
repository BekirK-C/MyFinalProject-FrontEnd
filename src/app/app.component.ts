import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'northwind';
  user: string = "Bekir Berat Kamacı"
  product1: any = { prdouctId: 1, productName: "Bardak", categoryId: 1, unitPrice: 5 }
  product2: any = { prdouctId: 2, productName: "Laptop", categoryId: 1, unitPrice: 25 }
  product3: any = { prdouctId: 3, productName: "Keyboard", categoryId: 2, unitPrice: 15 }
  product4: any = { prdouctId: 4, productName: "Mouse", categoryId: 2, unitPrice: 50 }
  product5: any = { prdouctId: 5, productName: "Camera", categoryId: 3, unitPrice: 45 }

  products = [this.product1, this.product2, this.product3, this.product4, this.product5]
}
