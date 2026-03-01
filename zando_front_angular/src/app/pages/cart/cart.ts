import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { Modal } from '../../components/modal/modal';

@Component({
  selector: 'app-cart',
  imports: [Header, Modal],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart {

showProduct = false;

 summonProduct(){

  this.showProduct = true;

 }

 closeProduct(){

  this.showProduct = false;

 }

}
