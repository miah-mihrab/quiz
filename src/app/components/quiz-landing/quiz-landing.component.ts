import { AngularFirestore } from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators'
@Component({
  selector: 'app-quiz-landing',
  templateUrl: './quiz-landing.component.html',
  styleUrls: ['./quiz-landing.component.css']
})
export class QuizLandingComponent implements OnInit {

  users = [{}];
  existing_user: boolean;
  constructor(private db: AngularFirestore) { }

  ngOnInit(): void {
    this.db
      .collection("users")
      .snapshotChanges()
      .subscribe(e => {
        this.users = e.map(data => {
          return ({
            name: data.payload.doc.data()['name'],
            score: data.payload.doc.data()['score'],
            id: data.payload.doc.id
          });
        });
      });
  }

  showUser() {
    this.existing_user = !this.existing_user
  }
}
