import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToolsListComponent } from './pages/tools/tools-list/tools-list.component';
import { ToolFormComponent } from './pages/tools/tool-form/tool-form.component';

const routes: Routes = [
  {path: '', component: ToolsListComponent},
  {path: 'form', component: ToolFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
