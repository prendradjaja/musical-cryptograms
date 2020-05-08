import { Component } from "@angular/core";

type Note = [string, string];
type Notes = Note[] & typeof NOTEMAP;
type Scale = {
  name: string;
  notes: Note[];
};

let NOTEMAP = {
  c: null,
  cs: null,
  d: null,
  ds: null,
  e: null,
  f: null,
  fs: null,
  g: null,
  gs: null,
  a: null,
  as: null,
  b: null,
};

let NOTES: Notes = ([
  ["C", "C"],
  ["C#", "Db"],
  ["D", "D"],
  ["D#", "Eb"],
  ["E", "E"],
  ["F", "F"],
  ["F#", "Gb"],
  ["G", "G"],
  ["G#", "Ab"],
  ["A", "A"],
  ["A#", "Bb"],
  ["B", "B"],
] as Note[]) as any;

NOTES.c = NOTES[0];
NOTES.cs = NOTES[1];
NOTES.d = NOTES[2];
NOTES.ds = NOTES[3];
NOTES.e = NOTES[4];
NOTES.f = NOTES[5];
NOTES.fs = NOTES[6];
NOTES.g = NOTES[7];
NOTES.gs = NOTES[8];
NOTES.a = NOTES[9];
NOTES.as = NOTES[10];
NOTES.b = NOTES[11];

const chromatic: Scale = {
  name: "chromatic",
  notes: [
    NOTES.c,
    NOTES.cs,
    NOTES.d,
    NOTES.ds,
    NOTES.e,
    NOTES.f,
    NOTES.fs,
    NOTES.g,
    NOTES.gs,
    NOTES.a,
    NOTES.as,
    NOTES.b,
  ],
};

const SCALES: Scale[] = [chromatic];

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "musical-cryptograms";
  SCALES = SCALES;
  flatMode: 0 | 1 = 0;
  name = "pandu";

  toArray(s: string): string[] {
    return Array.from(s);
  }

  toNoteName(letter: string, scale: Scale): string {
    const i = (letter.charCodeAt(0) - 97) % scale.notes.length;
    return scale.notes[i][this.flatMode];
  }
}
