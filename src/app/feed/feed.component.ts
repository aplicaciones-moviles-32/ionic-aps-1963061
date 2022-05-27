import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  cbum = [
    {
      "usuario": "@cbum",
      "src": "assets/cbum.jpg",
      "caption": "pain and gain"
    },
    {
      "usuario": "cbum",
      "src": "assets/cbum.jpg",
      "caption": "no duele"
    },
  ]

}