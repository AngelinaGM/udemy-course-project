import { Component } from '@angular/core';
import { DataStorageService } from '../../shared/data-storage.service';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {

    constructor(private dataStorageService: DataStorageService,
                private router: Router,
                private authService: AuthService) { }

    onSave() {
        if (this.router.url.indexOf('recipes') > -1) {
            this.dataStorageService.saveData()
            .subscribe(
                (response) => { },
                (error) => console.log('Error: ' + error)
            );
        } else {
            this.dataStorageService.saveShoppingList()
            .subscribe(
                (response) => console.log('Repsonse: ' + response),
                (error) => console.log('Error: ' + error)
            );
        }
    }

    onFetch() {
        if (this.router.url.indexOf('recipes') > -1) {
            this.dataStorageService.fetchData();
        } else {
            this.dataStorageService.fetchShoppingList();
        }
    }

    onLogout() {
        this.authService.logout();
    }

    getAuthService() {
        return this.authService;
    }
}