import './app.styl';
import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {Home} from './../home/home';
import {About} from './../about/about';

@Component({
  selector: 'app',
  template: require('./app.html'),
  directives: [ROUTER_DIRECTIVES],
})
@RouteConfig([
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { redirectTo: ['Home'], path: '/**' },
])
export class App { }

