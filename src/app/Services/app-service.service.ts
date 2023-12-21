import { Injectable } from '@angular/core';
import { AngularFirestore ,AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import Product from '../Interface/product';
import catlist from '../Interface/catlist';

import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
@Injectable({
  providedIn: 'root'
})
export class AppServiceService {
  private dbpath = '/addproduct';
  private db2path = "/catlist"
  private Catlist: AngularFirestoreCollection<catlist>

  private store: AngularFirestoreCollection<Product>
  constructor(private db: AngularFirestore, private dbupload: AngularFireDatabase) { 
    this.store = db.collection(this.dbpath);
    this.Catlist = db.collection(this.db2path)
    
    
  }
  getAllProduct(): AngularFirestoreCollection<Product> {
    return this.store
  }
  getAllCat(): AngularFirestoreCollection<catlist> {
    return this.Catlist

  }
  getProductByCategoty(productcategory: string) {
    
     return  this.db.collection(this.dbpath, ref => ref.where('productcat', 'array-contains', productcategory)).valueChanges()
  

  }
  
  getproductById(id:string){
    return this.store.doc(id).valueChanges()
  }
}
