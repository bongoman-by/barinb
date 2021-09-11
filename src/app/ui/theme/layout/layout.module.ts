import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LayoutComponent } from './layout.component';
import { FooterModule } from './components/footer/footer.module';
import { HeaderModule } from './components/header/header.module';
import { MainModule } from './components/main/main.module';

@NgModule({
  declarations: [LayoutComponent],
  imports: [RouterModule, FooterModule, HeaderModule, MainModule],
  exports: [LayoutComponent],
})
export class LayoutModule {}
