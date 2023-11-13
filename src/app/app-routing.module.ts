import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CoffeesComponent } from './components/coffees/coffees.component';
import { SingleCoffeeComponent } from './components/single-coffee/single-coffee.component';
import { RandomCoffeeComponent } from './components/random-coffee/random-coffee.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "Coffees",
    component: CoffeesComponent
  },
  {
    path: "Coffees/:id",
    component: SingleCoffeeComponent
  },
  {
    path: "Coffees/random",
    component: RandomCoffeeComponent
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
