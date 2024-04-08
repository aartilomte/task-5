import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'task_5';
  showForm: boolean = true;
  user : any;
  constructor(private router: Router) { }
  ngOnInit(): void {
    this.user = true
  }

  toggleFormVisibility() {
    this.showForm = !this.showForm;
    this.router.navigateByUrl('resister');
  }
  
}
