import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,Params,Data } from "@angular/router";

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {
  private errormsg : string;
  
  constructor(private route : ActivatedRoute) { }

  ngOnInit() {
    //this.errormsg = this.route.snapshot.data['message'];
    this.route.data.subscribe( (data : Data) => { this.errormsg = data['message'] });
  }

}
