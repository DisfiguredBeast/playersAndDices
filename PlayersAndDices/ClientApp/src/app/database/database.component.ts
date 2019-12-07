import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './database.component.html'
})
export class DatabaseComponent {
  public collections: string[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<string[]>(baseUrl + 'database/collections').subscribe(result => {
        this.collections = result;
    }, error => console.error(error));
  }
}
