import { Component, OnInit } from '@angular/core';

import { faHeart, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss']
})
export class PieComponent implements OnInit {

  public faHeart:IconDefinition = faHeart;
  
  public fechaHoy:Date = new Date();

  constructor() { }

  ngOnInit() {
  }

}
