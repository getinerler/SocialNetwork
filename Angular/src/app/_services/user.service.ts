import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '@shared/models/post';
import { User } from '@shared/models/user';
import { UserDetail } from '@shared/models/userDetail';
import { environment } from 'src/environments/environments.component';
import { Follower } from '@shared/models/follower';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getUserDetails(id: number): Observable<UserDetail> {
    let user: User = JSON.parse(localStorage.getItem("user")?.toString() ?? "{}");
    return this.http.get<UserDetail>(this.baseUrl + "users/getProfileInfo?id=" + id + 
      (user ? "&userId=" + user.id : ""));
  }

  getUserPosts(id:number): Observable<Post[]> {
    return this.http.get<Post[]>(this.baseUrl + "users/getposts?id=" + id);
  }

  getFollowers(id: number): Observable<Follower[]> {
    return this.http.get<Follower[]>(this.baseUrl + "users/getFollowers?id=" + id);
  }

  getFollowings(id: number): Observable<Follower[]> {
    return this.http.get<Follower[]>(this.baseUrl + "users/getFollowings?id=" + id);
  }

  changeFollow(id:number, userId: number, follow: boolean): Observable<void> {
    return this.http.get<void>(
      this.baseUrl + "users/Follow?id=" + id + "&userId=" + userId + 
      "&follow=" + follow
    );
  }
}
