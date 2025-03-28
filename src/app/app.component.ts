import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/main/home', icon: 'home' },
    { title: 'Clientes', url: '/main/clientes', icon: 'people' },
    { title: 'Clases', url: '/main/clases', icon: 'barbell' },
    { title: 'Instructores', url: '/main/instructores', icon: 'school' },
    { title: 'Reservas', url: '/main/reservas', icon: 'calendar' },
    { title: 'Pagos', url: '/main/pagos', icon: 'cash' },
  ];

 
  constructor() {}
}
