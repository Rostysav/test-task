import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @ViewChild('inputElement') inputElement: ElementRef;

  skillItem = '';
  skillsList = ['html', 'css', 'js'];

  constructor() { }

  ngOnInit(): void {
  }

  addSkill(value): void {
    this.skillsList.push(value);
    this.skillItem = '';
  }

  deleteItem(skills): void {
    for ( const i in this.skillsList ) {
      if ( skills === this.skillsList[i] ) {
        this.skillsList.splice(Number(i), 1);
      }
    }
  }

  editItem(skills): void {
    for ( const i in this.skillsList ) {
      if ( skills === this.skillsList[i] ) {
        this.inputElement.nativeElement.value = skills;
        this.skillsList.splice(Number(i), 1);
      }
    }
  }
}
