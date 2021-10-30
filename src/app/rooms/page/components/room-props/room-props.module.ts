import { NgModule } from '@angular/core';

import { NumeralSharedModule } from '@app/core/numerals/shared';

import { RoomPropsComponent } from './room-props.component';

@NgModule({
  imports: [NumeralSharedModule],
  declarations: [RoomPropsComponent],
  exports: [RoomPropsComponent],
})
export class RoomPropsModule {}
