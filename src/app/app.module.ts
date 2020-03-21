import { environment } from './../environments/environment';
import { RouterModule } from '@angular/router'
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AppComponent } from './app.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { QuizLandingComponent } from './components/quiz-landing/quiz-landing.component';
import { UserComponent } from './components/user/user.component'

@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    QuizLandingComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    RouterModule.forRoot([
      { path: '', component: QuizLandingComponent },
      { path: 'quiz/test', component: QuizComponent },
      { path: 'user/:id', component: UserComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
