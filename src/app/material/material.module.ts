import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatMenuModule} from '@angular/material/menu';

const MaterailComponents : any = [
  MatToolbarModule,
  MatSidenavModule,
  MatButtonModule,
  MatDividerModule,
  MatIconModule,
  MatCardModule,
  MatProgressSpinnerModule,
  MatMenuModule
]

@NgModule({
  declarations: [],
  imports: [MaterailComponents],
  exports: [MaterailComponents]
})
export class MaterialModule { }
