import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClickerComponent } from './clicker/clicker.component';
import { FrontPageComponent } from './front-page/front-page.component';


const routes: Routes = [
	{ path: 'welcome', component: FrontPageComponent },
	{ path: 'game', component: ClickerComponent },
	{ path: '', redirectTo: 'welcome', pathMatch: 'full' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
