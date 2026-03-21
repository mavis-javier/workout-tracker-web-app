import {TuiRoot, TuiTitle} from '@taiga-ui/core';
import {Component, computed, inject} from '@angular/core';
import {AppService} from './app.service';
import { toSignal } from '@angular/core/rxjs-interop';

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
  protected user = toSignal(this.appService.getUserData(1), {
    initialValue: {
      id: 0,
      firstName: '',
      lastName: '',
      email: ''
    }
  });

  protected greeting = computed(() => {
    if (!this.user().firstName) {
      return 'Loading...';
    }

    return `Hello, ${this.user().firstName}`;
  });
}
