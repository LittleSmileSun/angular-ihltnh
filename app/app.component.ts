import { Component, Type, Injector, VERSION } from '@angular/core';
import { BasicProject, Project } from './basic.project';
import { ProjectComponent } from './project.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  name = 'Angular ' + VERSION.full;
  
  component: Type<any>;
  injector: Injector;

  constructor(private inj: Injector) {}

  ngOnInit() {
    this.component = ProjectComponent;
    this.injector = Injector.create([
      { provide: BasicProject, useValue: new Project('test name') }
    ], this.inj);
  }
}
