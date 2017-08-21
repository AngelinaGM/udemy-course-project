import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
    token: string;

    constructor(private router: Router) {}

    signupUser(email: string, pwd: string) {
        firebase.auth().createUserWithEmailAndPassword(email, pwd)
            .catch(
                error => console.log(error)
            );
    }

    signinUser(email: string, pwd: string) {
        firebase.auth().signInWithEmailAndPassword(email, pwd)
            .then(
                response => {
                    firebase.auth().currentUser.getIdToken()
                        .then(
                            (token: string) => this.token = token
                        );
                    this.router.navigate(['/']);
                }
            )
            .catch(
                error => console.log(error)
            );
    }

    logout() {
        firebase.auth().signOut();
        this.token = null;
        this.router.navigate(['/signin']);
    }

    getToken() {
        firebase.auth().currentUser.getIdToken()
            .then(
                (token: string) => this.token = token
            );
        return this.token;
    }

    isAuthenticated() {
        return this.token != null;
    }
}