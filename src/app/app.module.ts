import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatListModule} from '@angular/material/list';
import {MatProgressBarModule} from '@angular/material/progress-bar'; 

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
		MatInputModule,
		MatCheckboxModule,
		MatRadioModule,
		MatListModule,
		MatProgressBarModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
