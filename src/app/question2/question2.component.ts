import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question2',
  templateUrl: './question2.component.html',
  styleUrls: ['./question2.component.css']
})
export class Question2Component implements OnInit {
  word1: string;
  word2: string;
  message = '';
  constructor() { }

  ngOnInit(): void {
  }


  checkStringsAnagram(): boolean {
    const len1 = this.word1.length;
    const len2 = this.word2.length;
    if (len1 !== len2) {
      console.log('False');
      return false;
    }
    const str1 = this.word1.toLowerCase().split('').sort().join('').trim();
    const str2 = this.word2.toLowerCase().split('').sort().join('').trim();
    console.log(str1, str2);
    if (str1 === str2) {
      console.log('True');
      return true;
    } else {
      console.log('False');
      return false;
    }
  }
}
