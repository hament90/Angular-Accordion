import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-basic-view',
  templateUrl: './basic-view.component.html',
  styleUrls: ['./basic-view.component.css']
})
export class BasicViewComponent implements OnInit {

  listAccordion: Array<{
    title: String,
    isOpen: Boolean,
    content: String
  }> = [{
    title: "Check 1",
    isOpen: true,
    content: '<p>testing application content</p>'
  }, {
    title: "Check 2",
    isOpen: false,
    content: '<p>testing application content</p>'
  }, {
    title: "Check 3",
    isOpen: false,
    content: '<p>testing application content</p>'
  }, {
    title: "Check 4",
    isOpen: false,
    content: '<p>testing application content</p>'
  }];

  constructor() { 
    //  console.log(typeof this.listAccordion,"checking value");
  }


  ngOnInit() {

  }

  showAccordion(index,isOpen:Boolean){
    this.listAccordion.filter((item) => { if(item.isOpen===true){item.isOpen=false;}});
    this.listAccordion[index].isOpen = true;
  } 
}
