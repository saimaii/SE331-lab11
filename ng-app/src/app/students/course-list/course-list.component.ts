import {Component, Input} from '@angular/core';
import {Student} from '../student';
import {Course} from '../course';
import {Router} from "@angular/router";
import {StudentsDataService} from "../../service/students-data.service";
import {CourseServerService} from "../../service/course-server.service";


@Component({
 selector: 'course-list',
 templateUrl: './course-list.component.html',
 styleUrls:['./course-list.component.css']
})
export class CourseListComponent {
  constructor(private router: Router,private courseServerService: CourseServerService) {}

  @Input() count:number;
  @Input('enrolledCourse') courses:Course;
  ngOnInit() {
    // this.courseServerService.getCourse()
    //   .subscribe( courses => this.courses = Course,
    //     (error :Error) => {
    //       if(error.message === 'UnAuthorize'){
    //         this.router.navigate(['login'],{queryParams:{source:'courses'}});
    //       }
    //     });


  }
}
