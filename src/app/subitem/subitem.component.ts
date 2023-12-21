import { Component, OnInit } from '@angular/core';
import { Router ,ActivatedRoute } from '@angular/router';
import { AppServiceService } from '../Services/app-service.service';
import Product from '../Interface/product';
import { PanZoomConfig, PanZoomAPI, PanZoomModel, PanZoomConfigOptions } from 'ngx-panzoom';

@Component({
  selector: 'app-subitem',
  templateUrl: './subitem.component.html',
  styleUrls: ['./subitem.component.css']
})
export class SubitemComponent implements OnInit {
id :any;
GetProduct :Product[] |any;
productcategory:any;
panZoomConfig: PanZoomConfig = new PanZoomConfig();
  constructor(private _router: Router,private router:ActivatedRoute , private productSer:AppServiceService ) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];
    this.productSer.getproductById(this.id).subscribe( result =>{

      this.GetProduct=result
      console.log(this.GetProduct)
      
      });



  }
  getProductcat( productcat: string){
    return new Promise<any | undefined |null>((resolve) => {
    
   
    console.log(productcat)
   this.productSer.getProductByCategoty(productcat).subscribe(products => {
      resolve(products)
  
      console.log(products)
      this.productcategory=products
      
     
   }
    )
  
  })
  
  }
}
