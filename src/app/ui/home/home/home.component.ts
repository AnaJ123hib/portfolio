import { Component } from '@angular/core';
import { HeaderComponent } from "../../header/header/header.component";
import { FooterComponent } from "../../footer/footer/footer.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, FooterComponent, RouterLink],
  templateUrl: './home.components.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
