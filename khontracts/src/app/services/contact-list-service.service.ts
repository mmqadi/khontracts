import { Injectable } from '@angular/core';
import { Contact } from '../interface/contact';
@Injectable({
  providedIn: 'root',
})
export class ContactListServiceService {
  constructor() {}

  getContactList() {
    return [
      {
        name: 'KDA Kd',
        surname: 'jdl DJ',
        email: 'mksjkc ajc dajcadkajda',
        cellphoneNumber: '1234567890',
        visibility: true,
      },
      {
        name: 'King Zwelithini',
        surname: 'Zulu',
        email: 'king@zuluhouse.org',
        cellphoneNumber: '1234567890',
        visibility: true,
      },
      {
        name: 'KDA Kd',
        surname: 'jdl DJ',
        email: 'mksjkc ajc dajcadkajda',
        cellphoneNumber: '1234567890',
        visibility: true,
      },
      {
        name: 'King Zwelithini',
        surname: 'Zulu',
        email: 'king@zuluhouse.org',
        cellphoneNumber: '1234567890',
        visibility: true,
      },
    ];
  }
}
