import { Injectable } from '@angular/core';
import at from 'lodash/at';
import { FiddleModule } from './fiddle.module';
import { InventoryService } from '@c8y/client';

@Injectable({
  providedIn: 'root'
})
export class FiddleService {
  constructor(
    inventoryService: InventoryService
  ) {
    console.dir(at);
    console.log('hi');

    let first = false;
    const subscription = inventoryService.list$()
      .subscribe({
        next: (data) => {
          if (!first) {
            first = true;
            console.log('works.');
          }

          console.dir(data);
        }
      });
  }
}
