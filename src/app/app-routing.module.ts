import { StudentActivitiesComponent } from './student-activities/student-activities.component';
import { PathGuard } from './path.guard';
import { SinglemoviesComponent } from './singlemovies/singlemovies.component';
import { LogoutComponent } from './logout/logout.component';
import { TvshowComponent } from './tvshow/tvshow.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NetworkComponent } from './network/network.component';
import { PepoleComponent } from './pepole/pepole.component';
import { MoviesComponent } from './movies/movies.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateCourseComponent } from './update-course/update-course.component';
import { ResultComponent } from './result/result.component';
import { ShowResultComponent } from './show-result/show-result.component';
import { UpdateResultComponent } from './update-result/update-result.component';
import { StuLevel1Component } from './stu-level1/stu-level1.component';
import { StuLevel2Component } from './stu-level2/stu-level2.component';
import { StuLevel3Component } from './stu-level3/stu-level3.component';
import { StuLevel4Component } from './stu-level4/stu-level4.component';
import { SettingComponent } from './setting/setting.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { AddCourseListComponent } from './add-course-list/add-course-list.component';
import { AddCourseList2Component } from './add-course-list2/add-course-list2.component';
import { AddCourseList3Component } from './add-course-list3/add-course-list3.component';
import { AddCourseList4Component } from './add-course-list4/add-course-list4.component';
import { InfoComponent } from './info/info.component';
import { ComplaintsComponent } from './complaints/complaints.component';
import { ScientificReferenceComponent } from './scientific-reference/scientific-reference.component';
import { ShowReferenceComponent } from './show-reference/show-reference.component';

const routes: Routes = [
  {path:'',redirectTo:'setting',pathMatch:'full'},
  {path:'setting',component:SettingComponent, canActivate:[PathGuard]},
  {path:'home',component:HomeComponent, canActivate:[PathGuard]},
  {path:'about',component:AboutComponent, canActivate:[PathGuard]},
  {path:'movies',component:MoviesComponent, canActivate:[PathGuard]},
  {path:'addStu',component:AddStudentComponent, canActivate:[PathGuard]},
  {path:'addCourseLev1',component:AddCourseListComponent, canActivate:[PathGuard]},
  {path:'addCourseLev2',component:AddCourseList2Component, canActivate:[PathGuard]},
  {path:'addCourseLev3',component:AddCourseList3Component, canActivate:[PathGuard]},
  {path:'addCourseLev4',component:AddCourseList4Component, canActivate:[PathGuard]},
  {path:'singlemovies/:id/:name',component:SinglemoviesComponent, canActivate:[PathGuard]},
  {path:'updateCourse/:id',component:UpdateCourseComponent, canActivate:[PathGuard]},
  {path:'Result/:userName/:id',component:ResultComponent, canActivate:[PathGuard]},
  {path:'ShowResult/:userName/:id',component:ShowResultComponent, canActivate:[PathGuard]},
  {path:'updateResult/:id',component:UpdateResultComponent, canActivate:[PathGuard]},
  {path:'allStudent',component:TvshowComponent, canActivate:[PathGuard]},
  {path:'StudentLevel1',component:StuLevel1Component, canActivate:[PathGuard]},
  {path:'StudentLevel2',component:StuLevel2Component, canActivate:[PathGuard]},
  {path:'StudentLevel3',component:StuLevel3Component, canActivate:[PathGuard]},
  {path:'StudentLevel4',component:StuLevel4Component, canActivate:[PathGuard]},
  {path:'logout',component:LogoutComponent},
  {path:'pepole',component:PepoleComponent, canActivate:[PathGuard]},
  {path:'network',component:NetworkComponent, canActivate:[PathGuard]},
  {path:'complaints',component:ComplaintsComponent, canActivate:[PathGuard]},
  {path:'ScientificReference',component:ScientificReferenceComponent, canActivate:[PathGuard]},
  {path:'ShowScientificReference',component:ShowReferenceComponent, canActivate:[PathGuard]},
  {path:'studentActivities',component:StudentActivitiesComponent, canActivate:[PathGuard]},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'info',component:InfoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
