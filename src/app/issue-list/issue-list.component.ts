import { Component, OnInit } from '@angular/core';
import { IssuesService } from '../issues.service';
import { Issue } from '../issue';

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.css']
})
export class IssueListComponent implements OnInit {

  issues: Issue[] = [];
  showReportIssue:boolean = false;
  constructor(private issueService: IssuesService){}

  ngOnInit(): void{
    this.getIssues();
 }

 private getIssues(){
  this.issues = this.issueService.getPendingIssues();
 }

 onCloseReport(){
  this.showReportIssue = false;
  this.getIssues();
 }

}
