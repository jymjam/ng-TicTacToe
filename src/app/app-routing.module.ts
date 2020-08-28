import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoardComponent } from './board/board.component';
import { SquareComponent } from './square/square.component';


const routes: Routes = [
  { path: '', component: SquareComponent },
  { path: 'square', component: SquareComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
