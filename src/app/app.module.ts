import { NgModule, Injector } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormioModule } from 'angular-formio';
import { AppComponent } from './app.component';
import { RatingWrapperComponent } from './rating-wrapper/rating-wrapper.component';
import { registerRatingComponent } from './rating-wrapper/rating-wrapper.formio';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    RatingWrapperComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    FormioModule,
    RouterModule.forRoot([
      {
        path: "",
        redirectTo: "test",
        pathMatch: "full"
      },
      {
        path: "test",
        loadChildren: () => import("./modules/test/test.module").then(m => m.TestModule)
      }
    ])
  ],
  entryComponents: [RatingWrapperComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(injector: Injector) {
    registerRatingComponent(injector);
  }
}

