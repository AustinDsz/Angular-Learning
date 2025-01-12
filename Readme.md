# Angular

## Components in Angular

Components are the foundational building blocks for any Angular application. Each component has three parts:

    TypeScript class
    HTML template
    CSS styles

## Updating the component class

In Angular, the component's logic and behavior are defined in the component's TypeScript class.
To update the component class and use interpolation.

```javascript

    import {Component} from '@angular/core';

    @Component({
    selector: 'app-root',
    imports: [],
    template: `
        <h1>{{title}} {{ 15 - 10 }} </h1>
    `,
    styleUrls: ['./app.component.css'],
    })
    export class AppComponent {
        title = 'hiiii';
    }

```

## Composing or adding new components

```javascript

import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-user',
  imports:[],
  template: `<h1>Hello {{ name }}</h1>`,
})
export class UserComponent {
  name = 'AustinSasss';
}

@Component({
  selector: 'app-root',
  imports: [UserComponent],
  template: `<h1>
    <app-user/>
  </h1>`
})
export class AppComponent {
}

```

## Control flow - @if @else

@if , @else are angular template syntaxes

@ will have dynamic rendering

```javascript

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [],
  template:` @if(isActive) {
      <p>{{active}}</p>
    } @else {
      <p>{{inactive}}</p>
    }`

})
export class AppComponent {
  isActive = true;
  active = 'User is active';
  inactive = 'User is inactive';
}

```

## Control flow - @for

```javascript

// app.component.ts

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

// app.component.html

<main class="main">
    @for(user of users; track user.id) {
      <ul>
        <li>Id: {{user.id}}</li>
        <li>Name: {{user.name}}</li>
        <li>Age: {{user.age}}</li>
        <li>Email: {{user.email}}</li>
      </ul>
      <p>-----------</p>
    }
</main>

```

## Property binding

Allows to set values using [] syntax, it will wrap the attribute name using [] and set the value using the varaibles in the class

```html

<img alt="photo" [src]="imageURL">

```

the variable is imageUrl that is present in the class

```javascript

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
    <h1>Hello {{title}}</h1>
    <input [type]="typeOfInput">
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'propertyBinding';
  typeOfInput = 'date';
}


```