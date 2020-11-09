import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WorkersComponent} from './pages/workers/workers.component'
import {WorkerComponent} from './pages/worker/worker.component'
const routes: Routes = [
  {path: 'workers', component: WorkersComponent},
  {path: 'worker/:id', component: WorkerComponent},
  {path: '**', pathMatch:'full', redirectTo: 'workers'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
