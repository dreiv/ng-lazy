import { Component } from "@angular/core";

@Component({
	selector: 'my-app',
	template: `
	<nav>
		<a routerLink="/home" routerLinkActive="active">Home</a>
	</nav>
	`
})
export class AppComponent {
}
