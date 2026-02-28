import { Component,signal, HostListener } from '@angular/core';



@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

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
