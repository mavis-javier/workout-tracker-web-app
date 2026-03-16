import {TuiRoot, TuiTitle} from '@taiga-ui/core';
import {Component, signal} from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [
    TuiRoot,
    TuiTitle,
  ],
  templateUrl: './app.component.html',
})
export class App {
  protected name = signal('Mavis');
}
