import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ListClientComponent } from './components/list-client/list-client.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientComponent } from './components/client/client.component';
import { DeleteClientComponent } from './components/delete-client/delete-client.component';
import { EditClientComponent } from './components/edit-client/edit-client.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { OpenClientComponent } from './components/open-client/open-client.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { SaveComponent } from './components/save/save.component'; 
import {MatGridListModule} from '@angular/material/grid-list';


@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    DeleteClientComponent,
    EditClientComponent,
    ListClientComponent,
    OpenClientComponent,
    SaveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatToolbarModule,
    MatCardModule,
    HttpClientModule,
    RouterModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
