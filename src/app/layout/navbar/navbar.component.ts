import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Menu {
  title: string;
  url: string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  menus: Menu[] = [
    { title: 'Main Concepts', url: '/mainconcepts' },
    { title: 'Layout Concepts', url: '/layoutconcepts' },
    { title: 'Components: Cards', url: '/componentscards' },
    { title: 'Components: Buttons', url: '/componentsbuttons' },
    { title: 'Components: Forms', url: '/componentsforms' },
  ];

  constructor(private router: Router) {}

  onClick({ url }: Menu) {
    this.router.navigateByUrl(url);
  }
}
