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

## Event handling

Events can be set using () syntax. The () should have event name when event is triggered it can call event handling methods by using ="methodName()" syntax.

```javascript

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
    <h1>{{ message }} {{count}}</h1>
    <button (click)='buttonAction()'>Click here</button>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  message = ''
  count = 0 ;

  buttonAction() {
    this.message = "Hello";
    this.count += 1
  }

}

```

Here click is an event and buttonAction() is called when the event is triggered

## Input

using @input() syntax we can pass data from parent to child, this is similar to props in other frameworks.

```javascript

// app.component.ts

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from "./user/user.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserComponent],
  template: '<app-user place="Bahamas"/>',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'input';
}


// user.component.ts

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  template: `
    <h1>I am going to {{ place }}.</h1>
  `,
  styleUrl: './user.component.css'
})
export class UserComponent {
    @Input() place = ''
}


```

## Output

output can send data from child to parent, to do that we need three things

1. @Output() decorator
2. EventEmitter class
3. $event object

```javascript

// child.component.ts
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  template: `
    <h1>Bellow is a message, click the button</h1>
    <button (click)="buttonAction()">Click Me</button>
  `,
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Output() stringEvent = new EventEmitter<string>();

  message = "Hello";
  count = 0;

  buttonAction()  {
      this.stringEvent.emit(this.message +" "+ ++this.count)
  }

}

// app.component.ts

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from "./child/child.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ChildComponent],
  template: `<app-child (stringEvent)="datadisplay($event)"/>
            <h1>{{ datas }}</h1>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'output';
  datas='';

  datadisplay(data: string) {
    this.datas = data;
  }
}

```

## Deferrable views

deferrable views allows to defer load contents of a webpage, means to load contents lately those content which are heavy or out of viewport

```javascript


@defer {
  <comments />
} @placeholder {
  <p>Future comments</p>
} @loading {
  <p> Loading comments ...</p>
}


```

@placeholder will display content before defer content has started loading.

@loading will display content when the defer content is actively being fetched, but hasn't finished yet.

Both @placeholder and @loading sections have optional parameters to prevent flickering from occurring when loading happens quickly. @placeholder has minimum and @loading has minimum and after. Add a minimum duration to the @loading block so it will be rendered for at least 2 seconds.

```javascript

@defer {
  <comments />
} @placeholder {
  <p>Future comments</p>
} @loading (minimum 2s) {
  <p>Loading comments...</p>
}

```

Deferrable views have a number of trigger options. Add a viewport trigger so the content will defer load once it enters the viewport.

```javascript

@defer (on viewport) {
  <comments />
}

```

the comment content will display once it enters the viewport.
