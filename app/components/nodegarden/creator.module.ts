import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NodegardenComponent } from './nodegarden.component';
import { routing } from './creator.routing';
import { CanvasComponent } from './canvas/canvas.component';
import { FlexLayoutModule } from "@angular/flex-layout";

@NgModule({
  imports: [
    CommonModule,
    routing,
    FlexLayoutModule
  ],
  declarations: [NodegardenComponent, CanvasComponent]
})
export class CreatorModule { }
