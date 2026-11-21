import { Project } from './types';

// Media lives in public/work/<slug>/. Videos are web-size (720p) copies of the originals.
// TODO(Mia): replace each placeholder description.
export const PROJECTS: Project[] = [
  {
    slug: "dissertation",
    title: "Dissertation",
    description: 'Description coming soon.',
    media: [
      { type: 'video', src: "/work/dissertation/in-front-behind-inside-final-film.mp4", poster: "/work/dissertation/in-front-behind-inside-final-film.poster.jpg" },
    ],
    links: [{ label: 'Read the dissertation (PDF)', href: "/work/dissertation/women-making-image-dissertation.pdf" }],
  },
  {
    slug: "fraud-awards",
    title: "Fraud Awards",
    description: 'Description coming soon.',
    media: [
      { type: 'video', src: "/work/fraud-awards/all-films-loop.mp4", poster: "/work/fraud-awards/all-films-loop.poster.jpg" },
      { type: 'video', src: "/work/fraud-awards/fraud-awards-in-the-crypt.mp4", poster: "/work/fraud-awards/fraud-awards-in-the-crypt.poster.jpg" },
      { type: 'image', src: "/work/fraud-awards/img_0486.jpg" },
      { type: 'image', src: "/work/fraud-awards/img_0597.jpg" },
      { type: 'image', src: "/work/fraud-awards/img_0598.jpg" },
      { type: 'image', src: "/work/fraud-awards/img_0717.jpg" },
      { type: 'image', src: "/work/fraud-awards/img_0849.jpg" },
      { type: 'image', src: "/work/fraud-awards/img_0851.jpg" },
      { type: 'image', src: "/work/fraud-awards/img_0907.jpg" },
      { type: 'image', src: "/work/fraud-awards/img_0991.jpg" },
      { type: 'image', src: "/work/fraud-awards/mallorca-img_3972.jpg" },
      { type: 'image', src: "/work/fraud-awards/mallorca-img_3987.jpg" },
    ],
  },
  {
    slug: "situations",
    title: "Situations",
    description: 'Description coming soon.',
    media: [
      { type: 'image', src: "/work/situations/img_2661.jpg" },
      { type: 'image', src: "/work/situations/img_2679.jpg" },
      { type: 'image', src: "/work/situations/img_2700.jpg" },
    ],
  },
  {
    slug: "spinning-celluloid",
    title: "Spinning Celluloid",
    description: 'Description coming soon.',
    media: [
      { type: 'video', src: "/work/spinning-celluloid/spinning-for-portfolio.mp4", poster: "/work/spinning-celluloid/spinning-for-portfolio.poster.jpg" },
    ],
  },
  {
    slug: "the-pictures",
    title: "The Pictures",
    description: 'Description coming soon.',
    media: [
      { type: 'video', src: "/work/the-pictures/img_0696.mp4", poster: "/work/the-pictures/img_0696.poster.jpg" },
      { type: 'image', src: "/work/the-pictures/img_0010.jpg" },
      { type: 'image', src: "/work/the-pictures/img_0664.jpg" },
      { type: 'image', src: "/work/the-pictures/img_0669.jpg" },
      { type: 'image', src: "/work/the-pictures/img_0670.jpg" },
      { type: 'image', src: "/work/the-pictures/img_0675.jpg" },
    ],
  },
  {
    slug: "thought-and-action",
    title: "Thought and Action",
    description: 'Description coming soon.',
    media: [
      { type: 'video', src: "/work/thought-and-action/cinemia-for-tate-lee-miller.mp4", poster: "/work/thought-and-action/cinemia-for-tate-lee-miller.poster.jpg" },
      { type: 'video', src: "/work/thought-and-action/video-camera-lens-clipped.mp4", poster: "/work/thought-and-action/video-camera-lens-clipped.poster.jpg" },
      { type: 'image', src: "/work/thought-and-action/dsc_0189.jpg" },
      { type: 'image', src: "/work/thought-and-action/dsc_0203.jpg" },
      { type: 'image', src: "/work/thought-and-action/img_5629.jpg" },
      { type: 'image', src: "/work/thought-and-action/img_5631.jpg" },
    ],
  },
  {
    slug: "upskirt",
    title: "UpSkirt",
    description: 'Description coming soon.',
    media: [
      { type: 'video', src: "/work/upskirt/performance.mp4", poster: "/work/upskirt/performance.poster.jpg" },
      { type: 'video', src: "/work/upskirt/left.mp4", poster: "/work/upskirt/left.poster.jpg" },
      { type: 'video', src: "/work/upskirt/right.mp4", poster: "/work/upskirt/right.poster.jpg" },
    ],
  },
];
