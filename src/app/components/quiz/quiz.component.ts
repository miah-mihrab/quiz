import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  title = "firestore-quiz";
  name;
  email;
  score = 0;
  quiz;
  quizes = [{}];
  submittedQuiz = [];
  result = [];
  submitted: boolean = true;
  user: boolean = false;
  showRes = [];
  attempted: any;
  userCreated: boolean = false;
  constructor(private db: AngularFirestore) { }
  ngOnInit(): void {

    this.db
      .collection("quiz-questions")
      .snapshotChanges()
      .subscribe(e => {
        this.quiz = e.map(data => {
          return data.payload.doc.data();
        });

        // Extract Questions
        let arr = Array.from(this.quiz);
        for (let i = 0; i < arr.length; i++) {
          this.quizes[i] = {
            name: arr[i]["name"],
            question: arr[i]["question"],
            answer: arr[i]["answer"],
            optionA: arr[i]["options"][0],
            optionB: arr[i]["options"][1],
            optionC: arr[i]["options"][2],
            optionD: arr[i]["options"][3]
          };
        }
      });

  }

  // Change Detection per question'answer
  onChange(event) {
    this.submittedQuiz[event.target.name] = event.target.value;
  }

  // After Submitting the quiz
  submitQuiz(quizForm) {
    this.quizes.forEach(e => {
      if (this.submittedQuiz[e["name"]]) {
        this.result.push(this.submittedQuiz[e["name"]]);
      }

      if (this.submittedQuiz[e["name"]] === e["answer"]) {
        this.score++;
      }
    });
    this.submitted = false;

    // Add user's submitted answer to the user database
    this.db
      .collection("users")
      .doc(this.email).get()
      .subscribe(e => {
        console.log(e.data()['attempted'])
        this.attempted = e.data()['attempted'] || 0;
        console.log(this.attempted)
        this.db
          .collection("users")
          .doc(this.email).set(
            {
              result: this.result,
              score: this.score,
              attempted: (this.attempted || 0) + 1
            },
            { merge: true }
          );
      })


    // Get the submitted result from the db for current user
    this.db
      .collection("users")
      .doc(this.email)
      .valueChanges()
      .subscribe(e => {
        this.showRes = e["result"];
      });
  }

  // Add the user
  addUser(form) {
    let name = form.value.username;
    let email = form.value.email;
    this.db
      .collection("/users")
      .doc(email)
      .set({
        name: name,
        score: 0
      }, { merge: true })
      .then(() => {
        this.user = true;
        this.userCreated = true
      });
  }

  // Reload location after clicking retry
  retry() {
    location.reload();
  }

}
