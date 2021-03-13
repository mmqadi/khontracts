import { Component, OnInit } from '@angular/core';

import { ContactListServiceService } from '../services/contact-list-service.service';
import { Contact } from '../interface/contact';
@Component({
  selector: 'contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.css'],
})
export class ContractListComponent implements OnInit {
  contactList: Contact[];
  headers: string[] = [
    'name',
    'surname',
    'email',
    'cellphone No',
    'visibility',
  ];
  constructor(private contactListServiceService: ContactListServiceService) {}

  ngOnInit(): void {
    this.contactList = this.contactListServiceService.getContactList();
  }
}
