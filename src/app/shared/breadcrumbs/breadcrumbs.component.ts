import { Component, OnDestroy } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { filter, map, Subscription } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [],
})
export class BreadcrumbsComponent implements OnDestroy {
  public title: string = 'Sin título';
  public pageComming: string = 'Perfil';
  public path: string = '';
  public pathFather: string = '';
  public titleSubs$: Subscription;
  public name?: string | null = '';
  public currentPage: string = '';
  constructor(private router: Router) {
    this.titleSubs$ = this.getDataRoute().subscribe(
      ({ title, pageComing, path, pathFather, currentPage }) => {
        this.title = title;
        this.pageComming = pageComing;
        this.path = path;
        this.pathFather = pathFather;
        this.currentPage = currentPage;
        document.title = `adminPro - ${title}`;
      }
    );
  }
  ngOnDestroy(): void {
    this.titleSubs$.unsubscribe();
  }

  getDataRoute() {
    this.name = localStorage.getItem('name');
    return this.router.events.pipe(
      filter((event) => event instanceof ActivationEnd),
      map((event) => event as ActivationEnd),
      filter((event) => event.snapshot.firstChild === null),
      map((event) => event.snapshot.data)
    );
  }
}
