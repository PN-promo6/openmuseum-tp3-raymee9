import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
// Service contenant le JSON de tous les musées et les méthodes associées
import { MuseumListService } from './services/museumList.service';
// Liste des musée : inclue SingleMuseumComponent
import { IndexComponent } from './index/index.component';
// Un musée dans la liste
import { SingleMuseumComponent } from './single-museum/single-museum.component';
import { MuseumDetailComponent } from './museum-detail/museum-detail.component';
import { AddComponent } from './add/add.component';

const appRoutes:Routes = [
  {path: 'add', component: AddComponent},
  {path: 'museumDetail', component: MuseumDetailComponent},
  {path: '', component: IndexComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    SingleMuseumComponent,
    IndexComponent,
    MuseumDetailComponent,
    AddComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [MuseumListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
