import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

import { NumeralSharedModule } from '@app/core/numerals/shared';

import { RoomBookingFormModule } from './components/room-booking-form/room-booking-form.module';
import { RoomBookingPriceModule } from './components/room-booking-price/room-booking-price.module';
import { RoomBookingCardComponent } from './room-booking-card.component';
import { WrapperComponent } from './room-booking-card.component.spec';

@NgModule({
  imports: [CommonModule, MatButtonModule, NumeralSharedModule, RoomBookingFormModule, RoomBookingPriceModule],
  declarations: [RoomBookingCardComponent, WrapperComponent],
  exports: [RoomBookingCardComponent, WrapperComponent],
})
export class RoomBookingCardModule {}
