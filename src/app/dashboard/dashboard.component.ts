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

    this.Clients = ['TCS', 'Infosys Pvt Ltd' , 'Accenture Solution Pvt Ltd' , 'Wipro'];
    this.Projects = ['Project A','Project B', 'Project C', 'Project D'];
    this.Years = [2019,2020,2021,2022,2023];
    this.TeamMembersSummary = [
      {
        region: 'East',
        teamMemberCount: 10,
        currentlyUnavailableMembers: 5
      },
      {
        region: 'West',
        teamMemberCount: 19,
        currentlyUnavailableMembers: 9
      },
      {
        region: 'North',
        teamMemberCount: 14,
        currentlyUnavailableMembers: 6
      },
      {
        region: 'South',
        teamMemberCount: 15,
        currentlyUnavailableMembers: 3
      }
    ]
    this.TeamMembers = [
      {
        region: 'East',
        details: [
          {
            id: 1,
            name: 'Swati',
            Status: 'Available',
            className: 'fa fa-phone'
          },
          {
            id: 2,
            name: 'Akshay',
            Status: 'Available',
            className: 'fa fa-phone'
          },
          {
            id: 3,
            name: 'Nikhil',
            Status: 'Busy',
            className: 'fa fa-user-times'
          },
          {
            id: 4,
            name: 'Karishma',
            Status: 'Busy',
            className: 'fa fa-user-times'
          }
        ]
      },
      {
        region: 'West',
        details: [
          {
            id: 1,
            name: 'Sakshi',
            Status: 'Available',
            className: 'fa fa-phone'
          },
          {
            id: 2,
            name: 'Seema',
            Status: 'Available',
            className: 'fa fa-phone'
          },
          {
            id: 3,
            name: 'Archana',
            Status: 'Busy',
            className: 'fa fa-user-times'
          },
          {
            id: 4,
            name: 'Snehalatha',
            Status: 'Busy',
            className: 'fa fa-user-times'
          }
        ]
      },
      {
        region: 'South',
        details: [
          {
            id: 1,
            name: 'Mandavi',
            Status: 'Available',
            className: 'fa fa-phone'
          },
          {
            id: 2,
            name: 'Yogini',
            Status: 'Available',
            className: 'fa fa-phone'
          },
          {
            id: 3,
            name: 'Abhishek',
            Status: 'Busy',
            className: 'fa fa-user-times'
          },
          {
            id: 4,
            name: 'Siddhant',
            Status: 'Busy',
            className: 'fa fa-user-times'
          }
        ]
      },
      {
        region: 'North',
        details: [
          {
            id: 1,
            name: 'Bhavna',
            Status: 'Available',
            className: 'fa fa-phone'
          },
          {
            id: 2,
            name: 'Chandra',
            Status: 'Available',
            className: 'fa fa-phone'
          },
          {
            id: 3,
            name: 'Saurabh',
            Status: 'Busy',
            className: 'fa fa-user-times'
          },
          {
            id: 4,
            name: 'Puneet',
            Status: 'Busy',
            className: 'fa fa-user-times'
          }
        ]
      }
    ]
  }
  
}
