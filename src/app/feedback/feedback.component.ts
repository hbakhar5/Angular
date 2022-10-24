import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  myimage10:string="assets/image/feedback-removebg-preview.png";

  constructor() { }

  ngOnInit(): void {
  }

}
