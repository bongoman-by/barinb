import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

import { RoomDetailsComponent } from './room-details.component';
import { WrapperComponent } from './room-details.component.spec';
@NgModule({
  imports: [CommonModule, MatIconModule],
  declarations: [RoomDetailsComponent, WrapperComponent],
  exports: [RoomDetailsComponent, WrapperComponent],
})
export class RoomDetailsModule {}
