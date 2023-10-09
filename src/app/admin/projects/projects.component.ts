import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/projects.service';
import { Projects } from 'src/app/projects';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit{

  projects: Projects[] = [];
  newProject:Projects = new Projects(); 
  editProject:Projects = new Projects(); 
  editIndex: any;
  deleteProject:Projects = new Projects(); 
  deleteIndex: any;
  searchByItems:any = [];
  searchBy:string = "";
  searchText: string = "";

  constructor(private projectService: ProjectsService){

  }

  ngOnInit(): void {
      this.projectService.getAllProjects().subscribe({
        next: (response: Projects[]) => {
          this.projects = response;
        },
        error: (error) => {
          console.log(error);
          alert("Not Authenticated")
        }
      })
      this.searchByItems = Object.keys(new Projects());
      console.log(this.searchByItems);
      console.log(Object.keys(new Projects()))
  }

  onSaveClick(){
    this.projectService.addNewProject(this.newProject).subscribe({
      next: (response) => {
        //add value
        let tempProject = new Projects();
        tempProject.projectID = response.projectID;
        tempProject.projectName = response.projectName;
        tempProject.dateOfStart = response.dateOfStart;
        tempProject.teamSize = response.teamSize;

        this.projects.push(tempProject);

        //clear values
        this.newProject.projectID = null;
        this.newProject.projectName = null;
        this.newProject.dateOfStart = null;
        this.newProject.teamSize = null;
      },
      error: (error) => {
          console.log(error);
      }
      }
    )
  }

  onEditClick(event:Projects, index: number){
    let tempEdit = new Projects();
    tempEdit.projectID = event.projectID;
    tempEdit.projectName = event.projectName;
    tempEdit.dateOfStart = event.dateOfStart;
    tempEdit.teamSize = event.teamSize;
    this.editProject = tempEdit;
    this.editIndex = index;
  }

  onUpdateClick(){
    this.projectService.updateProject(this.editProject).subscribe({
      next: (response: Projects) => {
        let tempEdit = new Projects();
        tempEdit.projectID = response.projectID;
        tempEdit.projectName = response.projectName;
        tempEdit.dateOfStart = response.dateOfStart;
        tempEdit.teamSize = response.teamSize;

        this.projects[this.editIndex] = tempEdit;

        this.editProject.projectID = null;
        this.editProject.projectName = null;
        this.editProject.dateOfStart = null;
        this.editProject.teamSize = null;
        this.editIndex = null;
      },
      error: (error) => {
          console.log(error);
      }
    })
  }

  onDeleteClick(event:any, index:number){
    this.deleteIndex = index;
    this.deleteProject.projectID = this.projects[index].projectID;
    this.deleteProject.projectName = this.projects[index].projectName;
    this.deleteProject.dateOfStart = this.projects[index].dateOfStart;
    this.deleteProject.teamSize = this.projects[index].teamSize;
  }

  onDeleteConfirmationClick(){
    this.projectService.deleteProject(this.deleteProject.projectID).subscribe(
      (response) => {
        this.projects.splice(this.deleteIndex,1);
        this.deleteProject.projectID = null;
        this.deleteProject.projectName = null;
        this.deleteProject.dateOfStart = null;
        this.deleteProject.teamSize = null;
      }
    )
  }

  onSearchClick(){
    if(this.searchBy !== "" && this.searchText !== ""){
      this.projectService.searchProject(this.searchBy,this.searchText).subscribe(
      (response) => {
        this.projects = response;
        this.searchBy ="";
        this.searchText = "";
      }
      )
    }
    else{
      this.projectService.getAllProjects().subscribe(
        (response: Projects[]) => {
          this.projects = response;
        }
      )
    }
  }
}
