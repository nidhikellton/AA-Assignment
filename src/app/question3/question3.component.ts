import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-question3',
  templateUrl: './question3.component.html',
  styleUrls: ['./question3.component.css']
})
export class Question3Component implements OnInit {
  temperatureForm: FormGroup;
  tempArr = [];
  maxTemp: number;
  minTemp: number;
  mean: number;
  mode;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.temperatureForm = this.fb.group({
      temperature: [null, [Validators.required, Validators.pattern(/^\d+$/)]],
    });


  }

  insert(): void {
    const temp = this.temperatureForm.value.temperature;
    if (temp > 0 && temp < 150) {
      this.tempArr.push(parseInt(temp, 10));
    } else {
      alert('Temp should be between 0 and 150');
    }
    this.temperatureForm.reset();
    this.minTemp = Math.min(...this.tempArr);
    this.maxTemp = Math.max(...this.tempArr);
    this.calculateMean();
    this.calculateMode();
  }

  get_min(): number {
    return this.minTemp;
  }

  get_max(): number {
    return this.maxTemp;
  }

  get_mean(): number {
    return this.mean;
  }

  get_mode(): void {
    return this.mode;
  }
  calculateMean(): void {
    this.mean = this.tempArr.reduce((acc, key) =>
      acc + key, 0) / this.tempArr.length;
  }

  calculateMode(): void {
    const counts = {};

    this.tempArr.forEach((e) => {
      if (counts[e] === undefined) {
        counts[e] = 0;
      }
      counts[e] += 1;
    });

    this.mode = Object.keys(counts).reduce((acc, key) =>  counts[key] < counts[acc] ? acc : key, 0);
  }


}






