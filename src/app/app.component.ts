import { Component, OnInit } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  // title = "firestore-quiz";
  // name;
  // email;
  // score = 0;
  // quiz;
  // quizes = [{}];
  // submittedQuiz = [];
  // result = [];
  // submitted: boolean = true;
  // user: boolean = false;
  // showRes = [];
  // constructor(private db: AngularFirestore) { }
  // ngOnInit(): void {

  //   this.db
  //     .collection("quiz-questions")
  //     .snapshotChanges()
  //     .subscribe(e => {
  //       this.quiz = e.map(data => {
  //         return data.payload.doc.data();
  //       });

  //       // Extract Questions
  //       let arr = Array.from(this.quiz);
  //       for (let i = 0; i < arr.length; i++) {
  //         this.quizes[i] = {
  //           name: arr[i]["name"],
  //           question: arr[i]["question"],
  //           answer: arr[i]["answer"],
  //           optionA: arr[i]["options"][0],
  //           optionB: arr[i]["options"][1],
  //           optionC: arr[i]["options"][2],
  //           optionD: arr[i]["options"][3]
  //         };
  //       }
  //     });

  // }

  // // Change Detection per question'answer
  // onChange(event) {
  //   this.submittedQuiz[event.target.name] = event.target.value;
  // }

  // // After Submitting the quiz
  // submitQuiz(quizForm) {
  //   this.quizes.forEach(e => {
  //     if (this.submittedQuiz[e["name"]]) {
  //       this.result.push(this.submittedQuiz[e["name"]]);
  //     }

  //     if (this.submittedQuiz[e["name"]] === e["answer"]) {
  //       this.score++;
  //     }
  //   });
  //   this.submitted = false;

  //   // Add user's submitted answer to the user database
  //   this.db
  //     .collection("users")
  //     .doc(this.email)
  //     .set(
  //       {
  //         result: this.result
  //       },
  //       { merge: true }
  //     );


  //   // Get the submitted result from the db for current user
  //   this.db
  //     .collection("users")
  //     .doc(this.email)
  //     .valueChanges()
  //     .subscribe(e => {
  //       this.showRes = e["result"];
  //     });
  // }

  // // Add the user
  // addUser(form) {
  //   let name = form.value.username;
  //   let email = form.value.email;
  //   this.db
  //     .collection("/users")
  //     .doc(email)
  //     .set({
  //       name: name
  //     })
  //     .then(() => {
  //       this.user = true;
  //     });
  // }

  // // Reload location after clicking retry
  // retry() {
  //   location.reload();
  // }
}
