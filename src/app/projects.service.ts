import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Projects } from './projects';
import { map } from'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor( private httpClient: HttpClient) {
  }

  getAllProjects(): Observable<Projects[]>{
    //normal return
    //return this.httpClient.get<Projects[]>("http://localhost:9090/api/projects", {responseType: 'json'});

    //with map
    //with amnual header addition
    // let currentUser = { token: ""}
    // let headers = new HttpHeaders();
    // headers = headers.set("Authorization", "Bearer ");
    // if(sessionStorage['currentUserDetails'] !== null){
    //   currentUser = JSON.parse(sessionStorage['currentUserDetails']);
    //   headers = headers.set("Authorization", "Bearer " + currentUser.token);
    // }
    // return this.httpClient.get<Projects[]>("http://localhost:9090/api/projects", { headers: headers , responseType: 'json'})
    // .pipe(map(
    //   (data) => {
    //     return data;
    //   }
    // ))

    //qitrh mapand interceptor it will be normal 
    return this.httpClient.get<Projects[]>("http://localhost:9090/api/projects", { responseType: 'json'})
    .pipe(map(
      (data) => {
        return data;
      }
    ))
  }

  addNewProject(project:Projects): Observable<Projects>{
    return this.httpClient.post<Projects>("http://localhost:9090/api/projects" , project, {responseType: 'json'});
  }

  updateProject(editProject:Projects): Observable<Projects>{
    return this.httpClient.put<Projects>("http://localhost:9090/api/projects" , editProject, {responseType: 'json'});
  }

  deleteProject(projectId: number): Observable<string>{
    return this.httpClient.delete<string>("http://localhost:9090/api/projects?ProjectID="+projectId);
  }

  searchProject(searchBy: string , searchText: string): Observable<Projects[]>{
    return this.httpClient.get<Projects[]>("http://localhost:9090/api/projects/search/"+searchBy+"/"+searchText , { responseType: "json"});
  }

}
