import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { ClickerComponent } from './clicker/clicker.component';
import { FormsModule } from '@angular/forms';
import { PlayFieldComponent } from './play-field/play-field.component';
import { InfoFieldComponent } from './info-field/info-field.component';

@NgModule({
	declarations: [
		AppComponent,
		FrontPageComponent,
		ClickerComponent,
		PlayFieldComponent,
		InfoFieldComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
