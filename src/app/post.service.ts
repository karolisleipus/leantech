import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class PostService {

  constructor(private db: AngularFireDatabase) { }

  create(post){
    return this.db.list('/posts').push(post);
  }
}
