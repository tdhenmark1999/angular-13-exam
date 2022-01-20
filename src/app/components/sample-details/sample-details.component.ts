import { Component, Input, OnInit } from '@angular/core';
import { SampleService } from 'src/app/services/sample.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Sample } from 'src/app/models/sample.model';

@Component({
  selector: 'app-sample-details',
  templateUrl: './sample-details.component.html',
  styleUrls: ['./sample-details.component.css']
})
export class SampleDetailsComponent implements OnInit {

  @Input() viewMode = false;

  @Input() currentSample: Sample = {
    title: '',
    description: '',
    published: false
  };
  
  message = '';

  constructor(
    private sampleService: SampleService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getSample(this.route.snapshot.params["id"]);
    }
  }

  getSample(id: string): void {
    this.sampleService.get(id)
      .subscribe({
        next: (data) => {
          this.currentSample = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  updatePublished(status: boolean): void {
    const data = {
      title: this.currentSample.title,
      description: this.currentSample.description,
      published: status
    };

    this.message = '';

    this.sampleService.update(this.currentSample.id, data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.currentSample.published = status;
          this.message = res.message ? res.message : 'The status was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }

  updateSample(): void {
    this.message = '';

    this.sampleService.update(this.currentSample.id, this.currentSample)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'This sample was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }

  deleteSample(): void {
    this.sampleService.delete(this.currentSample.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/samples']);
        },
        error: (e) => console.error(e)
      });
  }

}
