import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Route, Router} from '@angular/router';


@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.css']
})
export class OrderPageComponent implements OnInit {
  total: number = 0;
  name: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    //process the route and retrive parameters
    const routePar = this.route.snapshot.paramMap;
    this.total = Number(routePar.get('total'));
    this.name = String(routePar.get('name'));
  }


}
