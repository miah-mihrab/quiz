import { AngularFirestore } from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  id;
  name: any;
  lastScore: any;
  highestScore: number;
  attempted: any;
  rank: string;
  constructor(private db: AngularFirestore, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.params.subscribe(param => {
      this.db.collection('users').doc(param.id).get().subscribe(e => {
        this.name = e.data()["name"];
        this.lastScore = e.data()['score'];
        this.highestScore = 0;
        this.attempted = e.data()['attempted'];
        this.rank = '#101'
      })
    })
    this.db.collection('users')
  }

}
