import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  template: `
    <div class="nav">
      <div class="container"><a href="#" class="logo"></a> </div>
      <!--<div class="burguer">
        <span class="burguer-icon"></span>
        <div class="container-burguer">
         <ul>
            <li><a>My Work</a></li>
            <li><a>My Resume</a></li>
         </ul> 
         <h4>Contact me</h4>
         <ul>
            <li><a>anajcrus&#64;gmail.com</a></li>
            <li><a>Linkeddin</a></li>
         </ul>
        </div>
      </div> -->
    </div>
  `,
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
