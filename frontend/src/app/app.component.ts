import {TuiRoot, TuiTitle} from '@taiga-ui/core';
import {Component, inject, signal} from '@angular/core';
import {AppService} from './app.service';

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
  appService = inject(AppService);
  protected name = signal(this.appService.getName());
}
