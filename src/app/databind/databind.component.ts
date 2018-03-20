import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databind',
  templateUrl: './databind.component.html',
  styleUrls: ['./databind.component.css']
})
export class DatabindComponent implements OnInit {

FullName:string = 'Nate Bucher';
Address:{} ;
  constructor() { }

  ngOnInit() {
  }

}
export class Address{
  StreetAddress = '4308 Arcadia Blvd';
  City = 'Dayton';
  State = 'Ohio';
}