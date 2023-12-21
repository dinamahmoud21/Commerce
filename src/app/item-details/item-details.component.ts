import { Component, OnInit } from '@angular/core';
import { Router ,ActivatedRoute } from '@angular/router';
import Product from '../Interface/product';
import { AppServiceService } from '../Services/app-service.service';
import {NgxGalleryOptions} from '@rybos/ngx-gallery';
import {NgxGalleryImage} from '@rybos/ngx-gallery';
import {NgxGalleryAnimation} from '@rybos/ngx-gallery';
@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {
id:any;
GetProduct :Product |any=new Product;
galleryOptions?: NgxGalleryOptions[] |any;
galleryImages?: NgxGalleryImage[] |any;
images:[]|any=[]
productcategory:any;
  productcategories:any[]=[];
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
       slidesToScroll: 2
     }
   },
   {
     breakpoint: 480,
     settings: {
       slidesToShow: 1,
       slidesToScroll: 1
     }
   }
 ]};
  constructor( private _router: Router,private router:ActivatedRoute ,private Productser:AppServiceService ) { }

  ngOnInit(): void {
    this.refreh()
   
}
getProductcat( productcat: string){
  return new Promise<any | undefined |null>((resolve) => {
  
 
  console.log(productcat)
 this.Productser.getProductByCategoty(productcat).subscribe(products => {
    resolve(products)

    console.log(products)
    this.productcategory=products
    
   
 }
  )

})

}
refreh(){
  this.id = this.router.snapshot.params['id'];

  this.Productser.getproductById(this.id).subscribe( result =>{

    this.GetProduct=result
    this.GetProduct.selectedFile.forEach((element:any) => {
   this.images.push({
    small:element.imageurl,
    medium:element.imageurl,
    big:element.imageurl
  }
    )
    });
    this.galleryImages=this.images

console.log( this.galleryImages)
this.images=[]

  })
   this.galleryOptions = [
      {
          width: '700px',
          height: '500px',
          preview: true,
          previewZoom:true,
        imageAnimation: NgxGalleryAnimation.Zoom,
        previewCloseOnClick:true,
        previewCloseOnEsc:true,
        thumbnailsColumns: 6,
        previewAutoPlayPauseOnHover :true,
        previewInfinityMove:true,
          
      },
      // max-width 800
      {
          breakpoint: 800,
          width: '100%',
          height: '600px',
          imagePercent: 80,
          thumbnailsPercent: 20,
          preview: true,
          previewZoom:true,
          thumbnailsMargin: 20,
          thumbnailMargin: 20
      },
      // max-width 400
      {
          breakpoint: 400,
          preview: true,
          previewZoom:true,
      }
  ];
}
}
