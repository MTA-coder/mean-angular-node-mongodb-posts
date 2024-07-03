import { NgModule } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';

const materialModules = [
  MatCardModule,
  MatButtonModule,
  MatInputModule,
  MatExpansionModule,
  MatIconModule
];


@NgModule({
  imports: [...materialModules],
  exports: [...materialModules],
})
export class MaterialModule { }
