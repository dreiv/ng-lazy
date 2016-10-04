import { Component } from "@angular/core";

@Component({
	selector: 'my-app',
	template: `
	<nav>
		<a routerLink="/home" routerLinkActive="active">Home</a>
		<a routerLink="/about" routerLinkActive="active">About (lazy)</a>
	</nav>
	`
})
export class AppComponent {
}
