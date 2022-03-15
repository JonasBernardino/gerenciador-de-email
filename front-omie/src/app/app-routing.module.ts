import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteClientComponent } from './components/delete-client/delete-client.component';
import { EditClientComponent } from './components/edit-client/edit-client.component';
import { ListClientComponent } from './components/list-client/list-client.component';
import { OpenClientComponent } from './components/open-client/open-client.component';

const routes: Routes = [
  {
    path:"listar",
    component:ListClientComponent
  },
  {
    path:"editar/:id",
    component:EditClientComponent
  },
  {
    path:"deletar/:id",
    component:DeleteClientComponent
  },
  {
    path:"visualizar/:id",
    component:OpenClientComponent
  },
  {
    path:"salvar",
    component:DeleteClientComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
