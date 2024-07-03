import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatExpansionModule } from '@angular/material/expansion';

const materialModules = [
  MatCardModule,
  MatButtonModule,
  MatInputModule,
  MatExpansionModule
];


@NgModule({
  imports: [...materialModules],
  exports: [...materialModules],
})
export class MaterialModule { }
