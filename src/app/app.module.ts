import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ToolsListComponent } from './pages/tools/tools-list/tools-list.component';
import { ToolFormComponent } from './pages/tools/tool-form/tool-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ToolsListComponent,
    ToolFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
