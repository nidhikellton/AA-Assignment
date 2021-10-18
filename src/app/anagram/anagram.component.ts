import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-anagram',
  templateUrl: './anagram.component.html',
  styleUrls: ['./anagram.component.css']
})
export class AnagramComponent implements OnInit {
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
      alert('Not an Anagram');
    }
    const str1 = this.word1.toLowerCase().split('').sort().join('').trim();
    const str2 = this.word2.toLowerCase().split('').sort().join('').trim();
    if (str1 === str2) {
      alert('Anagram');
      return true;
    } else {
      alert('Not an Anagram');
      return false;
    }
  }
}
