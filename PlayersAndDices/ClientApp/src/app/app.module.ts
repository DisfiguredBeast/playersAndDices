import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSnackBarModule } from '@angular/material'
import { MatButtonModule } from '@angular/material/button'
import { MatMenuModule } from "@angular/material/menu"
import { MatToolbarModule } from "@angular/material/toolbar"
import { MatRippleModule } from "@angular/material/"
import { MatSidenavContainer, MatSidenav, MatSidenavContent } from "@angular/material/sidenav"
import { MatListModule } from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule  } from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { DatabaseComponent } from './database/database.component';
import { TheDarkEyeCharactersComponent } from "./the-dark-eye/characters/characters.component";
import { TheDarkEyeCharacterCreationComponent } from "./the-dark-eye/character-creation/character-creation.component";
import { ApiAuthorizationModule } from 'src/api-authorization/api-authorization.module';
import { AuthorizeGuard } from 'src/api-authorization/authorize.guard';
import { AuthorizeInterceptor } from 'src/api-authorization/authorize.interceptor';
import { WeaponsComponent } from './the-dark-eye/weapons/weapons.component';
import { SwordsComponent } from './the-dark-eye/weapons/swords/swords.component';
import { AxesComponent } from './the-dark-eye/weapons/axes/axes.component';
import { RangedComponent } from './the-dark-eye/weapons/ranged/ranged.component';
import { EditRangedDialog } from './the-dark-eye/weapons/ranged/edit-ranged-dialog/edit-ranged-dialog';
import { NewAdventureComponent } from './adventures/new-adventure/new-adventure.component';
import { GameOfLifeComponent } from './the-dark-eye/weapons/game-of-life/game-of-life.component';

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
        TheDarkEyeCharacterCreationComponent,
        WeaponsComponent,
        SwordsComponent,
        AxesComponent,
        RangedComponent,
        EditRangedDialog,
        GameOfLifeComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
      ApiAuthorizationModule,
      MatButtonModule,
      MatMenuModule,
      MatSnackBarModule,
      MatToolbarModule,
      MatIconModule,
      MatTableModule,
      MatDialogModule ,

    RouterModule.forRoot([
        { path: '', component: HomeComponent, pathMatch: 'full' },
        { path: 'counter', component: CounterComponent },
        { path: 'fetch-data', component: FetchDataComponent, canActivate: [AuthorizeGuard] },
        { path: 'database', component: DatabaseComponent },
        { path: "new-adventure", component: NewAdventureComponent },
        { path: "the-dark-eye/characters", component: TheDarkEyeCharactersComponent },
        { path: "the-dark-eye/characters/creation", component: TheDarkEyeCharacterCreationComponent },
        { path: "gameOfLife", component: GameOfLifeComponent },
        { path: "the-dark-eye/weapons", component: WeaponsComponent, 
            children: [
              {path: "swords", component: SwordsComponent},
              {path: "axes", component : AxesComponent},
              {path: "ranged", component : RangedComponent}
            ]}
    ]),
    BrowserAnimationsModule,
    MatListModule,
    MatRippleModule,
  ],
  entryComponents: [
    EditRangedDialog, RangedComponent
  ],
  providers: [
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}},
    { provide: HTTP_INTERCEPTORS, useClass: AuthorizeInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
