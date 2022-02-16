import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Menu {
  title: string;
  url: string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  menus: Menu[] = [
    { title: 'Main Concepts', url: '/mainconcepts' },
    { title: 'Layout Concepts', url: '/layoutconcepts' },
  ];

  constructor(private router: Router) {}

  onClick({ url }: Menu) {
    this.router.navigateByUrl(url);
  }
}
