import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{
  Designation:string='';
  Username:string='';
  NoOfTeamMembers:number=0;
  TotalCostOfAllProjects:number=0;
  PendingTask:number=0;
  UpcomingProjects:number=0;
  ProjectCost:number=0;
  CurrentExpenditure:number=0;
  AvailableFunds:number=0;

  Clients:string[] = [];
  Projects:string[] = [];
  Years:number[]=[];
  TeamMembersSummary:any = [];
  TeamMembers:any = [];

  ngOnInit(): void {
    this.Designation='Team Lead';
    this.Username= 'rahul.a.s.kumar';
    this.NoOfTeamMembers=50;
    this.TotalCostOfAllProjects=240;
    this.PendingTask=5;
    this.UpcomingProjects=10;
    this.ProjectCost=120;
    this.CurrentExpenditure=100;
    this.AvailableFunds=20;
  }
  
}
