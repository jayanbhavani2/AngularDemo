import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'bhavani-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.scss']
})
export class HelloWorldComponent implements OnInit {
 
  myName = "bhavani";
  @Input() childName:any;
  @Output() surname = new EventEmitter<string>();



  constructor() { }

  addsurname(value: string) {
    this.surname.emit(value);
  }

  ngOnInit(): void {
  }

}
