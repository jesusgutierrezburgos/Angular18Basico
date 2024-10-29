import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CronoComponent } from './components/crono/crono.component';
import { ButtonComponent } from './components/button/button.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CronoComponent,
    RouterLink,RouterLinkActive,ButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
    danger = 'danger';

  hazalgo(data?:any):void{
    console.log(data);
  }
}
