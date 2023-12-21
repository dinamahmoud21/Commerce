import { Pipe, PipeTransform } from "@angular/core";

import Product from '../Interface/product';
@Pipe({
    name:'filterproduct'
})
export class filterproductPipe implements  PipeTransform{
    transform(prod: any , ...args: any[]):any {
       
        var art = prod.map((x:any)=>{
            return x.productcat.map((y:any)=>{ return y;});;
        }).reduce((acc:any,ele:any,i:any)=>{
            acc = acc.concat(ele);
            return acc;
        });
        return new Set(art);
    
    
         
}

}