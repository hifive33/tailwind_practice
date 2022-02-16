import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutConceptsComponent } from './components/layout-concepts/layout-concepts.component';
import { MainConceptsComponent } from './components/main-concepts/main-concepts.component';

const routes: Routes = [
  { path: 'mainconcepts', component: MainConceptsComponent },
  { path: 'layoutconcepts', component: LayoutConceptsComponent },
  { path: '', redirectTo: '/mainconcepts', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }