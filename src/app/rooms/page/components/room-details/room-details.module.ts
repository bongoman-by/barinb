import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

import { RoomDetailsComponent } from './room-details.component';

@NgModule({
  imports: [MatIconModule],
  declarations: [RoomDetailsComponent],
  exports: [RoomDetailsComponent],
})
export class RoomDetailsModule {}
