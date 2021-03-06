import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';

import { IconsModule } from '@app/ui/icons';
import { FooterComponent } from './footer.component';

@NgModule({
  imports: [IconsModule, MatIconModule, MatButtonModule, HttpClientModule],
  declarations: [FooterComponent],
  exports: [FooterComponent],
})
export class FooterModule {}
