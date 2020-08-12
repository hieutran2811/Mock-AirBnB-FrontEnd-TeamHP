import { Component, OnInit } from '@angular/core';
import {IRole} from "../../../_model/irole";
import {IType} from "../../../_model/itype";
import {IAccount} from "../../../_model/iaccount";


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
];


@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit {

  constructor() { }

  public data: IAccount[] = [
    {
      id: 1,
      username: 'Hồ Đức Trung',
      password: '123',
      email: 'trung@gmail.com',
      phone: '0913231197',
      age: 1997,
      address: 'Hà Nội',
      idnumber: '2311',
      passport: 'B123',
      role:[
        {id:1, name:'Khách hàng'},
        {id:2, name:'Chủ nhà'},
      ]
    },
    {
      id: 2,
      username: 'Lê Mạnh Tuấn',
      password: '123',
      email: 'trung@gmail.com',
      phone: '0913231197',
      age: 1997,
      address: 'Hà Nội',
      idnumber: '2311',
      passport: 'B123',
      role:[
        {id:1, name:'Khách hàng'},
        // {id:2, name:'Chủ nhà'},
      ]
    },
    {
      id: 3,
      username: 'Mạc Văn BẰng',
      password: '123',
      email: 'trung@gmail.com',
      phone: '0913231197',
      age: 1997,
      address: 'Hà Nội',
      idnumber: '2311',
      passport: 'B123',
      role:[
        {id:1, name:'Khách hàng'},
        // {id:2, name:'Chủ nhà'},
      ]
    },
  ];

  accountList: IAccount[] = [];

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.accountList = this.data;
  }
}
