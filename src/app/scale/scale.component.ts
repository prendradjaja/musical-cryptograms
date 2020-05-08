import { Component, OnInit, Input } from "@angular/core";
import { Scale } from "../app.component";

@Component({
  selector: "scale",
  templateUrl: "./scale.component.html",
  styleUrls: ["./scale.component.scss"],
})
export class ScaleComponent implements OnInit {
  @Input() scale: Scale;
  @Input() name: string;
  flatMode: 0 | 1 = 0;
  starred: boolean = false;

  constructor() {}

  ngOnInit() {}

  toArray(s: string): string[] {
    return Array.from(s);
  }

  toNoteName(letter: string, scale: Scale): string {
    const i = (letter.charCodeAt(0) - 97) % scale.notes.length;
    return scale.notes[i][this.flatMode];
  }

  toggleFlats(): void {
    this.flatMode = +!this.flatMode as 0 | 1;
  }

  toggleStarred(): void {
    this.starred = !this.starred;
  }
}
