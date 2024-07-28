import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  selectedIndex: number = 0; // Default tab index

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.url.pipe(
      filter((urlSegments:any) => urlSegments.length > 0)
    ).subscribe((urlSegments:any) => {
      const path = urlSegments[0]?.path || 'tasks';
      this.selectedIndex = this.getTabIndex(path);
    });
  }

  getTabIndex(path: string): number {
    switch (path) {
      case 'users':
        return 1;
      case 'tasks':
      default:
        return 0;
    }
  }

  onTabChange(event: any) {
    const selectedTab = event.index === 0 ? 'tasks' : 'users';
    this.router.navigate([selectedTab]);
  }
}
