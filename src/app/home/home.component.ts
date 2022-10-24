import { Component , OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  myimage:string="assets/image/ss-removebg-preview.png";


  constructor(){}
  

  ngOnInit(): void {
    alert('welcome to HOME.Here we can see the customer details')

    document.body.className="selector";
  }

}
