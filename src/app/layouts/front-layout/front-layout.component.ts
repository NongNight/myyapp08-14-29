import { Component } from '@angular/core';
import { NavberComponent } from "../../navber/navber.component";
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "../../footer/footer.component";

@Component({
  selector: 'app-front-layout',
  standalone: true,
  imports: [NavberComponent, RouterOutlet, FooterComponent],
  templateUrl: './front-layout.component.html',
  styleUrl: './front-layout.component.scss'
})
export class FrontLayoutComponent {

}
