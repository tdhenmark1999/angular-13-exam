import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SamplesListComponent } from './components/samples-list/samples-list.component';
import { SampleDetailsComponent } from './components/sample-details/sample-details.component';
import { AddSampleComponent } from './components/add-sample/add-sample.component';

const routes: Routes = [
  { path: '', redirectTo: 'samples', pathMatch: 'full' },
  { path: 'samples', component: SamplesListComponent },
  { path: 'samples/:id', component: SampleDetailsComponent },
  { path: 'add', component: AddSampleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
