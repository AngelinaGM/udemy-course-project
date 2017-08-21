import { Component } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {

    constructor(private dataStorageService: DataStorageService, 
                private route: ActivatedRoute,
                private authService: AuthService) { }

    onSave() {
        console.log(this.route.pathFromRoot);
        this.dataStorageService.saveData()
            .subscribe(
                (response) => console.log('Repsonse: ' + response),
                (error) => console.log('Error: ' + error)
            );
    }

    onFetch() {
       this.dataStorageService.fetchData();
    }

    onLogout() {
        this.authService.logout();
    }
}