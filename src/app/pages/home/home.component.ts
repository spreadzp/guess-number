import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'game-ngrx';
  typeChoisedIcon = '';
  constructor() { }

  ngOnInit(): void {
  }
  setTypeIcon(event: string) {
    this.typeChoisedIcon = event.toLowerCase();
  }
}
