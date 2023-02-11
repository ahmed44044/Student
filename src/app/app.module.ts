import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { PepoleComponent } from './pepole/pepole.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarfooterComponent } from './navbarfooter/navbarfooter.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { NetworkComponent } from './network/network.component';
import { TvshowComponent } from './tvshow/tvshow.component';
import { LogoutComponent } from './logout/logout.component';
import { SinglemoviesComponent } from './singlemovies/singlemovies.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { SearchPipe } from './search.pipe';
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
import { ImportantCoursesComponent } from './important-courses/important-courses.component';
import { InfoComponent } from './info/info.component';
import { ComplaintsComponent } from './complaints/complaints.component';
import { ScientificReferenceComponent } from './scientific-reference/scientific-reference.component';
import { ShowReferenceComponent } from './show-reference/show-reference.component';
import { StudentActivitiesComponent } from './student-activities/student-activities.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MoviesComponent,
    PepoleComponent,
    RegisterComponent, 
    LoginComponent,
    NavbarComponent,
    NavbarfooterComponent,
    FooterComponent,
    AboutComponent,
    NetworkComponent,
    TvshowComponent,
    LogoutComponent,
    SinglemoviesComponent,
    SearchPipe,
    UpdateCourseComponent,
    ResultComponent,
    ShowResultComponent,
    UpdateResultComponent,
    StuLevel1Component,
    StuLevel2Component,
    StuLevel3Component,
    StuLevel4Component,
    SettingComponent,
    AddStudentComponent,
    AddCourseListComponent,
    AddCourseList2Component,
    AddCourseList3Component,
    AddCourseList4Component,
    ImportantCoursesComponent,
    InfoComponent,
    ComplaintsComponent,
    ScientificReferenceComponent,
    ShowReferenceComponent,
    StudentActivitiesComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    FormsModule,
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
