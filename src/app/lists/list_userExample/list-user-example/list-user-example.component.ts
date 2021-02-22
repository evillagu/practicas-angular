import { Component, OnInit } from '@angular/core';
import { DataFromExample } from '../../../models/fromExample';
import { FromExampleService } from '../../../services/from-example.service';
import { MatListOption } from '@angular/material/list'

@Component({
  selector: 'app-list-user-example',
  templateUrl: './list-user-example.component.html',
  styleUrls: ['./list-user-example.component.scss']
})
export class ListUserExampleComponent implements OnInit {


  typesOfShoes!: DataFromExample[];
  listShoes!: DataFromExample[];
  
  constructor( public fromExampleService: FromExampleService) { }

  ngOnInit(): void {
    this.typesOfShoes = this.fromExampleService.getDtaFrom();
  }

  onGroupsChange(options: MatListOption[]) {
    this.listShoes = options.map(o => o.value);
    console.log(this.listShoes);
  }
}
