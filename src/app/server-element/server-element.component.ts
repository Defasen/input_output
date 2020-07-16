import { Component, OnInit, Input, ViewEncapsulation, OnChanges, ViewChild, ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, OnChanges {

  @Input('srvElement') element: {type: string, name:string, content: string};
  @ViewChild('heading', {static: true}) header: ElementRef;
  @ContentChild('contentParagraph', {static: true}) paragraph: ElementRef;

  constructor() {

   }

   ngOnChanges(){

   }



  ngOnInit(): void {
   console.log(this.header.nativeElement.textContent)
  }

}
