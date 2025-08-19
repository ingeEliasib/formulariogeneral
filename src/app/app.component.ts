// app.component.ts
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
// import { IonRouterOutlet } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [
    IonicModule
  ]
})
export class AppComponent {
  constructor() {}
}
