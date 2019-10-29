import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DatabindingComponent } from './components/databinding/databinding.component';


const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "databinding",
    component: DatabindingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
