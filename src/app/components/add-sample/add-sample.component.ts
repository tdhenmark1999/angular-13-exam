import { Component, OnInit } from '@angular/core';
import { Sample } from 'src/app/models/sample.model';
import { SampleService } from 'src/app/services/sample.service';

@Component({
  selector: 'app-add-sample',
  templateUrl: './add-sample.component.html',
  styleUrls: ['./add-sample.component.css']
})
export class AddSampleComponent implements OnInit {

  sample: Sample = {
    title: '',
    description: '',
    published: false
  };
  submitted = false;

  constructor(private sampleService: SampleService) { }

  ngOnInit(): void {
  }

  saveSample(): void {
    const data = {
      title: this.sample.title,
      description: this.sample.description
    };

    this.sampleService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  newSample(): void {
    this.submitted = false;
    this.sample = {
      title: '',
      description: '',
      published: false
    };
  }

}
