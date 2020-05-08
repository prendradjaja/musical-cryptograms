import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

type Note = [string, string];
type Notes = Note[] & typeof NOTEMAP;
export type Scale = {
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

const SCALES: Scale[] = [
  {
    name: "Chromatic",
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
  },
  {
    name: "Diatonic",
    notes: [NOTES.c, NOTES.d, NOTES.e, NOTES.f, NOTES.g, NOTES.a, NOTES.b],
  },
  {
    name: "Alphabetical",
    notes: [NOTES.a, NOTES.b, NOTES.c, NOTES.d, NOTES.e, NOTES.f, NOTES.g],
  },
  {
    name: "Alphachromatic",
    notes: [
      NOTES.a,
      NOTES.b,
      NOTES.c,
      NOTES.d,
      NOTES.e,
      NOTES.f,
      NOTES.g,
      NOTES.a,
      NOTES.as,
      NOTES.b,
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
      NOTES.c,
      NOTES.cs,
      NOTES.d,
      NOTES.ds,
    ],
  },
  {
    name: "Pentatonic",
    notes: [NOTES.c, NOTES.d, NOTES.e, NOTES.g, NOTES.a],
  },
  // {
  //   name: "Diatonic from B",
  //   notes: [NOTES.b, NOTES.c, NOTES.d, NOTES.e, NOTES.f, NOTES.g, NOTES.a],
  // },
  // {
  //   name: "Diatonic from D",
  //   notes: [NOTES.d, NOTES.e, NOTES.f, NOTES.g, NOTES.a, NOTES.b, NOTES.c],
  // },
  // {
  //   name: "Diatonic from E",
  //   notes: [NOTES.e, NOTES.f, NOTES.g, NOTES.a, NOTES.b, NOTES.c, NOTES.d],
  // },
  // {
  //   name: "Diatonic from F",
  //   notes: [NOTES.f, NOTES.g, NOTES.a, NOTES.b, NOTES.c, NOTES.d, NOTES.e],
  // },
  // {
  //   name: "Diatonic from G",
  //   notes: [NOTES.g, NOTES.a, NOTES.b, NOTES.c, NOTES.d, NOTES.e, NOTES.f],
  // },
];

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "musical-cryptograms";
  SCALES = SCALES;
  name = "amyloftus";

  constructor(private route: ActivatedRoute) {
    route.fragment.subscribe((fragment) => {
      this.name = fragment;
    });
  }
}
