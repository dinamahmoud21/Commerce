import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../Services/app-service.service';
import Product from '../Interface/product';
import { map, Observable } from 'rxjs';
import { NgSelectConfig } from '@ng-select/ng-select';
import { FormBuilder, FormGroup, FormArray, FormControl ,Validators, AbstractControl } from '@angular/forms'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  Product : Product[] |any;
  FilterProduct:any =[];
  FilterProduct2:any=[]
  productcategory:any;
  productcategories:any[]=[];
  selecteditem : Product |any ={}
  images:any=[]
  slideConfig = {"slidesToShow": 5,
   "slidesToScroll": 5 ,
   
   "dots": true,
  "infinite": false,
  rtl:true,
  arrows: true,
  autoplay:true,
  prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
  nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
  
  "responsive": [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        "dots": false,
       
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        "dots": false,
       
      }
    }
  ]};
  slideConfig2 = {"slidesToShow": 1,
   "slidesToScroll": 1 ,
   
   "dots": true,
  "infinite": false,
  rtl:true,
  arrows: false,
  autoplay:true,
  
  
  };
  
  constructor(private productSer:AppServiceService  ,private config: NgSelectConfig ,private FB:FormBuilder) { }

  ngOnInit(): void {
   
    this.getallproduct()
    this.images=[{
      img:'../../../assets/img/FashionDesktopAR.jpg'
    },
    {
      img:'../../../assets/img/DesktopAR.jpg'
    },
  ]
 
  }
  getallproduct(){
  
    this.productSer.getAllProduct().snapshotChanges().pipe(
      map(cahange =>
        cahange.map(c => ({ id: c.payload.doc.id, ...c.payload.doc.data() }))
      )
    ).subscribe(data => {
      this.Product = data;
      this.Product.forEach((element: any) => {
        if(this.FilterProduct.indexOf(element.productcat[0]) === -1  ){
            this.FilterProduct.push(element.productcat[0])
           
            console.log(this.FilterProduct)
            
        }



      })
     
      
      

   
    })
   
  }
   getProductcat( productcat: string){
    
    this.FilterProduct2=[]
    return new Promise<any | undefined |null>((resolve) => {
     
   
    console.log(productcat)
   this.productSer.getProductByCategoty(productcat).subscribe(products => {
      resolve(products)

      console.log(products)
      this.productcategory=products
      this.productcategories?.push(products)
      console.log(this.productcategories)
      
      this.productcategory.forEach((element: any) => {
        
        if(this.FilterProduct2.indexOf(element.productcat[1]) === -1  ){
         
            this.FilterProduct2.push({'product':element.productcat[1]}
            )
      
     
            console.log(this.FilterProduct2)
           return this.FilterProduct2
          
            
        }
       
   



      })
 
  
     
   }
    )
  
  
  })
  
}
onselect(item:any){
  this.selecteditem=item
  console.log("Selected item Id: ", item);
}

}