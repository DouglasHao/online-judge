import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Problem } from '../../models/problem.model';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-problem-detail',
  templateUrl: './problem-detail.component.html',
  styleUrls: ['./problem-detail.component.css']
})
export class ProblemDetailComponent implements OnInit {
  problem: Problem;
  dataService: DataService;

  constructor(private route:ActivatedRoute) { 
    this.dataService = new DataService();
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.problem = this.dataService.getProblem(+params['id']);
    })
  }

}