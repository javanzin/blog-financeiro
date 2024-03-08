import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataMock } from '../../data/dados';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {


  cardTitle: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';

  cardDescription: string = ' descrição do conteudo gerando pelo lorem ipsum dolor sit amet, consectetur adipiscing elit. ';

  cardImage: string = 'https://img.freepik.com/free-photo/butterfly-with-bright-blue-orange-wings_188544-14466.jpg?w=2000&t=st=1708790188~exp=1708790788~hmac=f290b7bc248e496e922a12e2dc0cb24b16699851d914c2db0bf2ca16584a3adf';

  private id: string = null || '0' ;

  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.route.params.subscribe( params => {
      this.id = params['id'];
    })

    this.loadMockData()
  }

  loadMockData() {
    const result = dataMock.filter(item => item.id == this.id)

    this.cardTitle = result[0].title
    this.cardDescription = result[0].description
    this.cardImage = result[0].image
  }
}
