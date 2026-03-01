import { Component,signal, HostListener } from '@angular/core';
import { CarrouselComponent } from '../../components/carrousel/carrousel';
import { ProductCard } from '../../components/product-card/product-card';
import { Header } from '../../components/header/header';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-home',
  imports: [CarrouselComponent, ProductCard, Header, FormsModule], 
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  minValue = 200;
  maxValue = 800;

  isAsideOpen = true;
  isDesktop = false;

  ngOnInit() {
    if (typeof window !== 'undefined') {
      this.isDesktop = window.innerWidth >= 768;
      this.isAsideOpen = this.isDesktop; 
    }
  }

  toggleAside() {
    this.isAsideOpen = !this.isAsideOpen;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isDesktop = event.target.innerWidth >= 768;
    this.isAsideOpen = this.isDesktop;
  }

}
