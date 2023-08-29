import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @ViewChild('hamburger') hamburger!: ElementRef;
  @ViewChild('navMenu') navMenu!: ElementRef;
  @ViewChild('navLink') navLink!: ElementRef[];

  ngOnInit() {
    this.navLink.forEach(n => n.nativeElement.addEventListener("click", this.closeMenu.bind(this)));
  }

  mobileMenu() {
    this.hamburger.nativeElement.classList.toggle("active");
    this.navMenu.nativeElement.classList.toggle("active");
  }

  closeMenu() {
    this.hamburger.nativeElement.classList.remove("active");
    this.navMenu.nativeElement.classList.remove("active");
  }
}
