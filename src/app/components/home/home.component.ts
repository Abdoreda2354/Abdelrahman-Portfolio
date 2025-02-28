import { Component, ElementRef, HostListener, Inject, PLATFORM_ID, ViewChild } from '@angular/core';
import { ServicesComponent } from "../services/services.component";
import { ProjectsComponent } from "../projects/projects.component";
import { ContactComponent } from "../contact/contact.component";
import { FooterComponent } from "../footer/footer.component";
import { AboutComponent } from "../about/about.component";
import { isPlatformBrowser } from '@angular/common';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ServicesComponent, ProjectsComponent, ContactComponent, FooterComponent, AboutComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(@Inject(PLATFORM_ID) private platformId: object) {}
  @ViewChild('collaps') collaps!:ElementRef
  navLinks!: NodeListOf<HTMLAnchorElement>;

  @HostListener('window:resize', ['$event'])
  onResize() {
    if (window.matchMedia('(max-width: 991.98px)').matches) {
      this.collaps.nativeElement.classList.remove('d-flex')
      
    }
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.navLinks = document.querySelectorAll('.nav-link');
      if (window.matchMedia('(max-width: 991.98px)').matches) {
        this.collaps.nativeElement.classList.remove('d-flex')
        
      
    }
    }

  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.setActiveLink();
    }
  }

  private setActiveLink(): void {
    const scrollPosition = window.scrollY;

    this.navLinks.forEach((link) => {
      const section = document.querySelector(link.getAttribute('href')!);
      if (
        section &&
        section.getBoundingClientRect().top + window.scrollY <= scrollPosition + 100 &&
        section.getBoundingClientRect().bottom + window.scrollY > scrollPosition + 100
      ) {
        this.navLinks.forEach((nav) => nav.classList.remove('active'));
        link.classList.add('active');
      }
    });
  }
}