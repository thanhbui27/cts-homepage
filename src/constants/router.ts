export interface RouterItem {
  id: number;
  title: string;
  path: string;
}

interface Router {
  [key: string]: RouterItem;
}

export const ROUTER: Router = {
  ABOUTUS: {
    id: 1,
    title: 'aboutUs',
    path: '/about-us',
  },
  WHATWEDO: {
    id: 2,
    title: 'whatWeDo',
    path: '/what-we-do',
  },
  CASESTUDIES: {
    id: 3,
    title: 'caseStudies',
    path: '/case-studies',
  },
  WHATOURCLIENTSAY: {
    id: 4,
    title: 'whatOurClientSay',
    path: '/client-testimonials',
  },
  CONTACTUS: {
    id: 5,
    title: 'contactUs',
    path: '/contact',
  },
};
