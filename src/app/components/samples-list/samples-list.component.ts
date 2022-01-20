import { Component, OnInit } from '@angular/core';
import { Sample } from 'src/app/models/sample.model';
import { SampleService } from 'src/app/services/sample.service';

@Component({
  selector: 'app-samples-list',
  templateUrl: './samples-list.component.html',
  styleUrls: ['./samples-list.component.css']
})
export class SamplesListComponent implements OnInit {

  samples?: Sample[];
  currentSample: Sample = {};
  currentIndex = -1;
  title = '';

  constructor(private sampleService: SampleService) { }

  ngOnInit(): void {
    this.retrieveSamples();
  }

  retrieveSamples(): void {
    this.sampleService.getAll()
      .subscribe({
        next: (data) => {
          this.samples = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  refreshList(): void {
    this.retrieveSamples();
    this.currentSample = {};
    this.currentIndex = -1;
  }

  setActiveSample(sample: Sample, index: number): void {
    this.currentSample = sample;
    this.currentIndex = index;
  }

 

  searchPostId(): void {
    this.currentSample = {};
    this.currentIndex = -1;

    this.sampleService.findByPostId(this.title)
      .subscribe({
        next: (data) => {
          this.samples = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

}
