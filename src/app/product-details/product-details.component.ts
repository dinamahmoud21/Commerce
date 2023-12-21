import { Component, ElementRef, OnInit, ViewChild  ,Input} from '@angular/core';
import { AppServiceService } from '../Services/app-service.service';
import Product from '../Interface/product';
import { map, Observable } from 'rxjs';
import { NgSelectConfig } from '@ng-select/ng-select';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  Product : Product[] |any;
  selectedvalue:any;
  FilterProduct : Product[] |any
  
  constructor(private productSer:AppServiceService  ,private config: NgSelectConfig) { 
       
    this.config.notFoundText = 'لايوجد ';
    this.config.appendTo = 'body';
    this.config.bindValue = 'value';
  }

  ngOnInit(): void {
    this.getallproduct()
    this.filterProduct()
  }
  getallproduct(){
    this.productSer.getAllProduct().snapshotChanges().pipe(
      map(cahange =>
        cahange.map(c => ({ id: c.payload.doc.id, ...c.payload.doc.data() }))
      )
    ).subscribe(data => {
      this.Product = data;
  




   
    })
   
  }
  filterProduct(){
    this.Product.forEach((row:any) => {
      this.FilterProduct=[]
      if ( this.FilterProduct.indexOf(row.productcat[0]) === -1) {
        this.FilterProduct.push(row.productcat[0]);
      }
      
    });
return this.FilterProduct
  }
  async getProductcat(productcat: any) {
    if(productcat == null){
      this.getallproduct
    }
    else{
 
  
    console.log(productcat)
    this.Product = await this.productSer.getProductByCategoty(productcat)
    console.log(this.Product)
    return this.Product
    }
  }

}

