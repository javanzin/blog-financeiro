import { Component, Input, } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-big-card',
  standalone: true,
  imports: [],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.scss'
})
export class BigCardComponent {
  
  constructor(private router: Router) { }

  @Input()
  cardTitle: string = '';

  @Input()
  cardDescription: string = '';

  @Input()
  cardImage: string = '';

  @Input()
  id: string = '0';

  goToContent(id: string) {
    this.router.navigate(['/content', id]);
  }
  
}
