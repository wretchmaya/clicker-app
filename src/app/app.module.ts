import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { ClickerComponent } from './clicker/clicker.component';
import { FormsModule } from '@angular/forms';
import { PlayFieldComponent } from './play-field/play-field.component';
import { InfoFieldComponent } from './info-field/info-field.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

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
		FormsModule,
		NoopAnimationsModule,
		MatButtonModule,
		MatFormFieldModule,
		MatInputModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
