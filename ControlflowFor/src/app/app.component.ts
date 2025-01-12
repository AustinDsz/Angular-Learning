import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  users = [
    {
      id: 1,
      name: "Alice",
      age: 25,
      email: "alice@example.com"
    },
    {
      id: 2,
      name: "Bob",
      age: 30,
      email: "bob@example.com"
    },
    {
      id: 3,
      name: "Charlie",
      age: 28,
      email: "charlie@example.com"
    }
  ];
}
