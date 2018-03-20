import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
FullName  = 'Nate Bucher';
Address  = '4308 Arcadia Blvd Dayton, Ohio';

jobs: any[] = [{
  title: 'Nationwide Biweekly Administration',
  description: 'NBA Inc. is the nation’s largest and most recognized'},
  {title: 'Growth Dynamics',
 description: 'Growth Dynamics is a sales force performance analysis.'}
];

constructor(private UserSvc: UserService) {

}
ngOnInit() {
this.UserSvc.List()
.subscribe(users => {
console.log(users);

}
);
}
}


