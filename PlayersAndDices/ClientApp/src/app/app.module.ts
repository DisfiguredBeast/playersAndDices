import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSnackBarModule, MatFormFieldModule, MatInputModule } from '@angular/material'
import { MatButtonModule } from '@angular/material/button'
import { MatButtonToggleModule } from '@angular/material/button-toggle'
import { MatIconModule } from '@angular/material/icon'
import { MatMenuModule } from "@angular/material/menu"
import { MatToolbarModule } from "@angular/material/toolbar"
import { MatRippleModule } from "@angular/material/"
import { MatSidenavContainer, MatSidenav, MatSidenavContent } from "@angular/material/sidenav"
import { MatListModule } from '@angular/material/list';

import { AppComponent } from './app.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { DatabaseComponent } from './database/database.component';
import { NewAdventureComponent } from './adventures/new-adventure/new-adventure.component';
import { TheDarkEyeCharactersComponent } from "./the-dark-eye/characters/characters.component";
import { TheDarkEyeCharacterCreationComponent } from "./the-dark-eye/character-creation/character-creation.component";
import { ApiAuthorizationModule } from 'src/api-authorization/api-authorization.module';
import { AuthorizeGuard } from 'src/api-authorization/authorize.guard';
import { AuthorizeInterceptor } from 'src/api-authorization/authorize.interceptor';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        MatSidenavContainer, MatSidenav, MatSidenavContent,

        AppComponent,
        SideMenuComponent,
        NavMenuComponent,
        HomeComponent,
        CounterComponent,
        FetchDataComponent,
        DatabaseComponent,

        NewAdventureComponent,

        TheDarkEyeCharactersComponent,
        TheDarkEyeCharacterCreationComponent
  ],
  imports: [
      BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
      CommonModule,
      HttpClientModule,
      FormsModule,
      ApiAuthorizationModule,

      MatButtonModule,
      MatButtonToggleModule,
      MatFormFieldModule,
      MatIconModule,
      MatInputModule,
      MatMenuModule,
      MatSnackBarModule,
      MatToolbarModule,

    RouterModule.forRoot([
        { path: '', component: HomeComponent, pathMatch: 'full' },
        { path: 'counter', component: CounterComponent },
        { path: 'fetch-data', component: FetchDataComponent, canActivate: [AuthorizeGuard] },
        { path: 'database', component: DatabaseComponent },

        { path: 'adventures/new-adventure', component: NewAdventureComponent },

        { path: "the-dark-eye/characters", component: TheDarkEyeCharactersComponent },
        { path: "the-dark-eye/characters/creation", component: TheDarkEyeCharacterCreationComponent },
    ]),
    BrowserAnimationsModule,
    MatListModule,
    MatRippleModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthorizeInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
