import { Component, OnInit, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  games: Array<any> = null;
  selectedIcon: string;
  filters: any = {
    typeAddRate: 0,
    gameOver: false,
    genre: '0-127',
  };
  selected = -1;
@Output() carouselMessage = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
    this.games = [
      {
        id: 1,
        name: '0-127',
        src: 'assets/genres/0-127.png',
        gameOver: false,
      },
      {
        id: 2,
        name: '0-255',
        src: 'assets/genres/0-255.png',
        gameOver: false,
      },
      { id: 3, name: '0-511', src: 'assets/genres/0-511.png' },
      {
        id: 4,
        name: '0-1023',
        src: 'assets/genres/0-1023.png',
        gameOver: false,
      },
      { id: 5, name: 'FAQ', src: 'assets/genres/drama.png' },
      { id: 6, name: 'Info', src: 'assets/genres/fantasy.png' },
      {
        id: 7,
        name: 'Statistic',
        src: 'assets/genres/film noir.png',
        gameOver: true,
      },
      { id: 8, name: 'Hot games', src: 'assets/genres/horror.png' },
      { id: 9, name: 'Demo games', src: 'assets/genres/romance.png' },
      { id: 10, name: 'Help', src: 'assets/genres/science fiction.png' },
      { id: 11, name: 'About', src: 'assets/genres/westerns.png' },
    ];
  }
  selectGame(game, index) {
    console.log('GameCarouselComponent::selectGame() | method called');
    console.log(game.name);
    this.selected = index;
    this.selectedIcon = game.name;
    // this.carouselMessage.emit(game.name);
    this.filters.genre = game.name;
    // this.store.dispatch([new FilterGames(this.filters)]);
  }
}
