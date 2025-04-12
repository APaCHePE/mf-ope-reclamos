import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
// import { ButtonModule } from 'primeng/button';
// import { MenuItem } from 'primeng/api';
// import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-operaciones',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: ` <router-outlet></router-outlet> `,
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  // items: MenuItem[] = [];
  title = 'mf-ope-reclamos';
  ngOnInit() {}
}
