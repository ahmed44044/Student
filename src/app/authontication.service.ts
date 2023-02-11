import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthonticationService {
// isLogin:any =null;
isLogin = new BehaviorSubject(null);
adminLogin:any="";

userName:string='';
id:any;

  constructor(private _HttpClinet:HttpClient) {
  let token:any=  localStorage.getItem('token')
  let role:any=  localStorage.getItem('role')
  if(token !=null){
    const headers= new HttpHeaders().set('Elective Course',token)
 let userData:any = jwtDecode(token);
this.id=userData.id
// console.log(this.id);
 this.userName= userData.userName;
//  this.isLogin =token;
  }

this.isLogin.next(role);
   }
  signUp(userData:any):Observable<any> {
    return this._HttpClinet.post('https://student-project-final2.vercel.app/api/v1/auth/signup',userData);
  };

  signIn(userData:any):Observable<any>
  {
   return this._HttpClinet.post('https://student-project-final2.vercel.app/api/v1/auth/login',userData);
  }

  addCourse(userData:any):Observable<any>
  {
 
      let t= localStorage.getItem('token')
    
   return this._HttpClinet.post('https://student-project-final2.vercel.app/api/v1/course/addCourses',userData,
   {
    headers:new HttpHeaders({
      'authorization':`Bearer__${t}`
    })
   });
  }


  updateCourse(userData:any,courseId:any):Observable<any>
  {
 
      let t= localStorage.getItem('token')
    
   return this._HttpClinet.put(`https://student-project-final2.vercel.app/api/v1/course/updateCourses/${courseId}`,userData,
   {
    headers:new HttpHeaders({
      'authorization':`Bearer__${t}`
    })
   });
  }



  deleteCourse(id:any):Observable<any>
  {
 
      let t= localStorage.getItem('token')
    
   return this._HttpClinet.delete(`https://student-project-final2.vercel.app/api/v1/course/deleteCourses/${id}`,
   {
    headers:new HttpHeaders({
      'authorization':`Bearer__${t}`
    })
   }
   
   )
   
  }


  getCourses():Observable<any>
  {
   
      let t= localStorage.getItem('token')
   
    
   return this._HttpClinet.get(`https://student-project-final2.vercel.app/api/v1/user/allCourses/${this.id}`,
   {
    headers:new HttpHeaders({
      'authorization':`Bearer__${t}`
    })
   });
    
  }


  profile():Observable<any>
  {
   
      let t= localStorage.getItem('token')
   
    console.log(this.id);
    
   return this._HttpClinet.get(`https://student-project-final2.vercel.app/api/v1/user/student/${this.id}`,
   {
    headers:new HttpHeaders({
      'authorization':`Bearer__${t}`
    })
   });
    
  }

  StuResult():Observable<any>
  {
   
      let t= localStorage.getItem('token')
   
    console.log(this.id);
    
   return this._HttpClinet.get(`https://student-project-final2.vercel.app/api/v1/user/result/${this.id}`,
   {
    headers:new HttpHeaders({
      'authorization':`Bearer__${t}`
    })
   });
    
  }


  allStudent(role:any):Observable<any>
  {
   
      let t= localStorage.getItem('token')
   
    
   return this._HttpClinet.get(`https://student-project-final2.vercel.app/api/v1/user/allStudent`,
   {
    headers:new HttpHeaders({
      'authorization':`Bearer__${t}`
    })
   });
    
  }

  StuLevel1():Observable<any>
  {
   
      let t= localStorage.getItem('token')
   
    
   return this._HttpClinet.get(`https://student-project-final2.vercel.app/api/v1/user/studentLevel1`,
   {
    headers:new HttpHeaders({
      'authorization':`Bearer__${t}`
    })
   });
    
  }

  StuLevel2():Observable<any>
  {
   
      let t= localStorage.getItem('token')
   
    
   return this._HttpClinet.get(`https://student-project-final2.vercel.app/api/v1/user/studentLevel2`,
   {
    headers:new HttpHeaders({
      'authorization':`Bearer__${t}`
    })
   });
    
  }

  StuLevel3():Observable<any>
  {
   
      let t= localStorage.getItem('token')
   
    
   return this._HttpClinet.get(`https://student-project-final2.vercel.app/api/v1/user/studentLevel3`,
   {
    headers:new HttpHeaders({
      'authorization':`Bearer__${t}`
    })
   });
    
  }

  StuLevel4():Observable<any>
  {
   
      let t= localStorage.getItem('token')
   
    
   return this._HttpClinet.get(`https://student-project-final2.vercel.app/api/v1/user/studentLevel4`,
   {
    headers:new HttpHeaders({
      'authorization':`Bearer__${t}`
    })
   });
    
  }

  addResult(userDate:any,studentID:any):Observable<any>
  {
   
      let t= localStorage.getItem('token')
   
    
   return this._HttpClinet.post(`https://student-project-final2.vercel.app/api/v1/admin/addResult/${studentID}`,userDate,
   {
    headers:new HttpHeaders({
      'authorization':`Bearer__${t}`
    })
   });
    
  }


  addStudent(userDate:any):Observable<any>
  {
   
      let t= localStorage.getItem('token')
   
    
   return this._HttpClinet.post(`https://student-project-final2.vercel.app/api/v1/admin/AddStudent`,userDate,
   {
    headers:new HttpHeaders({
      'authorization':`Bearer__${t}`
    })
   });
    
  }


  updateResult(userDate:any,iD:any):Observable<any>
  {
   
      let t= localStorage.getItem('token')
   
    
   return this._HttpClinet.patch(`https://student-project-final2.vercel.app/api/v1/admin/updateResult/${iD}`,userDate,
   {
    headers:new HttpHeaders({
      'authorization':`Bearer__${t}`
    })
   });
    
  }

  showResult(id:any):Observable<any>
  {
   
      let t= localStorage.getItem('token')
   
    
   return this._HttpClinet.get(`https://student-project-final2.vercel.app/api/v1/user/result/${id}`,
   {
    headers:new HttpHeaders({
      'authorization':`Bearer__${t}`
    })
   });
    
  }

  addCourseListLev1(userData:any):Observable<any>
  {
 
      let t= localStorage.getItem('token')
    
   return this._HttpClinet.post('https://student-project-final2.vercel.app/api/v1/admin/addCoursesLev1',userData,
   {
    headers:new HttpHeaders({
      'authorization':`Bearer__${t}`
    })
   });
  }
  addCourseListLev2(userData:any):Observable<any>
  {
 
      let t= localStorage.getItem('token')
    
   return this._HttpClinet.post('https://student-project-final2.vercel.app/api/v1/admin/addCoursesLev2',userData,
   {
    headers:new HttpHeaders({
      'authorization':`Bearer__${t}`
    })
   });
  }
  addCourseListLev3(userData:any):Observable<any>
  {
 
      let t= localStorage.getItem('token')
    
   return this._HttpClinet.post('https://student-project-final2.vercel.app/api/v1/admin/addCoursesLev3',userData,
   {
    headers:new HttpHeaders({
      'authorization':`Bearer__${t}`
    })
   });
  }
  addCourseListLev4(userData:any):Observable<any>
  {
 
      let t= localStorage.getItem('token')
    
   return this._HttpClinet.post('https://student-project-final2.vercel.app/api/v1/admin/addCoursesLev4',userData,
   {
    headers:new HttpHeaders({
      'authorization':`Bearer__${t}`
    })
   });
  }

  
  addScientificReference(userDate:any):Observable<any>
  {
   
      let t= localStorage.getItem('token')
   
    
   return this._HttpClinet.post(`https://student-project-final2.vercel.app/api/v1/admin/Scientific`,userDate,
   {
    headers:new HttpHeaders({
      'authorization':`Bearer__${t}`
    })
   });
    
  }
  ScientificReference(role:any):Observable<any>
  {
   
      let t= localStorage.getItem('token')
   
    
   return this._HttpClinet.get(`https://student-project-final2.vercel.app/api/v1/user/Reference`,
   {
    headers:new HttpHeaders({
      'authorization':`Bearer__${t}`
    })
   });
    
  }

}

