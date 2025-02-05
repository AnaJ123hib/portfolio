import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  template: `
    <div class="footer">
        <div class="container">
          <div class="column">
          <h3>Contact me</h3>
            <div class="contact">
              <p><a href="mailto:anajcrus@gmail.com">anajcrus&#64;gmail.com</a></p>
              <p><a href="https://www.linkedin.com/in/ana-jimenes-b3a2481a7/">Linkedin</a></p>
          </div>
          </div>
          <div class="column">
            <div class="contact">
              <h3>Phone</h3>
              <div><a href="tel:+51962345456">Perú (+51) 962 345456</a></div> 
            </div>
          </div>
        </div>
        <div class="copy">
        © Ana Jimenes 2025
        </div>
    </div>
  `,
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
