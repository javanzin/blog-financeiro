import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-small-card',
  standalone: true,
  imports: [],
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.scss'
})
export class SmallCardComponent {
  constructor(
    private router: Router,

    ) { }

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
