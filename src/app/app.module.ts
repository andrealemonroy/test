import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { WorkerComponent } from "./pages/worker/worker.component";
import { WorkersComponent } from "./pages/workers/workers.component";
import { AppRoutingModule } from "./app-routing.module";
import { FormsModule } from "@angular/forms";

import { HttpClientModule } from "@angular/common/http";
@NgModule({
  declarations: [AppComponent, WorkerComponent, WorkersComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
