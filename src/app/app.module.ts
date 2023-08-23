import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipe/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { DropdownDirectve } from './shared/dropdown.directive';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { RecipeStartComponent } from './recipe/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipe/recipe-edit/recipe-edit.component';
import { RecipeService } from './recipe/recipe.service';
import { AuthComponent } from './auth/auth.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { AlertComponent } from './shared/alert/alert.component';
import { PlaceholderComponent } from './shared/placeholder/placeholder.component';
 import { PlaceholderDirective } from './shared/placeholder/placeholder.directive';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipeComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirectve,
    RecipeStartComponent,
    RecipeEditComponent,
    AuthComponent,
    LoadingSpinnerComponent,
    AlertComponent,
    PlaceholderComponent,
    PlaceholderDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [ShoppingListService,RecipeService],
  bootstrap: [AppComponent],

})
export class AppModule { }




// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';
// import { HttpClientModule } from '@angular/common/http';
// import { StoreModule } from '@ngrx/store';
// import { EffectsModule } from '@ngrx/effects';
// import { StoreDevtoolsModule } from '@ngrx/store-devtools';
// import { StoreRouterConnectingModule } from '@ngrx/router-store';

// import { AppComponent } from './app.component';
// import { HeaderComponent } from './header/header.component';
// import { AppRoutingModule } from './app-routing.module';
// import { SharedModule } from './shared/shared.module';
// import { CoreModule } from './core.module';
// import * as fromApp from './store/app.reducer';
// import { AuthEffects } from './auth/store/auth.effects';
// import { environment } from '../environments/environment';
// import { RecipeEffects } from './recipes/store/recipe.effects';

// @NgModule({
//   declarations: [AppComponent, HeaderComponent],
//   imports: [
//     BrowserModule,
//     HttpClientModule,
//     AppRoutingModule,
//     StoreModule.forRoot(fromApp.appReducer),
//     EffectsModule.forRoot([AuthEffects, RecipeEffects]),
//     StoreDevtoolsModule.instrument({ logOnly: environment.production }),
//     StoreRouterConnectingModule.forRoot(),
//     SharedModule,
//     CoreModule
//   ],
//   bootstrap: [AppComponent]
//   // providers: [LoggingService]
// })
// export class AppModule {}
