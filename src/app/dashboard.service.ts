import { Injectable } from '@angular/core';

//provide for root leve so tha this can be accessed by any component or module
// @Injectable({
//   providedIn: 'root'
// })
@Injectable()

export class DashboardService {

  getTeamMembersSummary = () => {
    let teammemberSummary = [
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
    return teammemberSummary;
  }
}
