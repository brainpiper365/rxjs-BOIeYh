/*
    Note: Using RxJS in standalone typescript project and Angular 9 
    project is a bit different. Please see how to use RxJS in Angular 9.
    This example is created for standalone purpose so that can be downloaded
    and used without making any changes in this file
*/

import * as Rx from "rxjs";
import { of } from 'rxjs/observable/of';
import * as RxOperators from "rxjs/operators";

const myOperator = of('Operator example', '----------------------------------',
  'Welcome to CodeSpace!', '__________________________________')
  .pipe(RxOperators.map((x: string) => `${x}`));

myOperator.subscribe((x: string) => console.log(x));


const myObservable = Rx.Observable.create(function subscribe(observer: any) {
  observer.next("Observable example");
  observer.next("----------------------------------");
  observer.next("Welcome to CodeSpace!");
  observer.next("__________________________________");
  observer.complete();
});

var mySubscription = myObservable.subscribe((x: string) => console.log(x));