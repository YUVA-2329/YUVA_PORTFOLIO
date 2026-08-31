export const CINE_FRAME_COUNT = 169;

export const cineFramePath = (n: number) =>
  `/frames2/frame_${String(n).padStart(4, "0")}.jpg`;

export type Beat = {
  id: string;
  show: number;
  hide: number;
  label: string;
  quote: string;
  speaker: string;
  film: string;
};

export const BEATS: Beat[] = [
  {
    id: "v0.1",
    show: 0.05,
    hide: 0.15,
    label: "v0.1",
    quote: "FIRST CODE",
    speaker: "",
    film: "",
  },
  {
    id: "v0.5",
    show: 0.15,
    hide: 0.25,
    label: "v0.5",
    quote: "C / C++",
    speaker: "",
    film: "",
  },
  {
    id: "v1.0",
    show: 0.25,
    hide: 0.35,
    label: "v1.0",
    quote: "JAVA",
    speaker: "",
    film: "",
  },
  {
    id: "v1.5",
    show: 0.35,
    hide: 0.45,
    label: "v1.5",
    quote: "DATA STRUCTURES",
    speaker: "",
    film: "",
  },
  {
    id: "v2.0",
    show: 0.45,
    hide: 0.55,
    label: "v2.0",
    quote: "AI",
    speaker: "",
    film: "",
  },
  {
    id: "v2.5",
    show: 0.55,
    hide: 0.65,
    label: "v2.5",
    quote: "FULL STACK",
    speaker: "",
    film: "",
  },
  {
    id: "v3.0",
    show: 0.65,
    hide: 0.85,
    label: "v3.0",
    quote: "PRODUCT BUILDER",
    speaker: "YOU ARE HERE",
    film: "",
  },
];

export const CINE_INTRO_FADE_END = 0.08;
