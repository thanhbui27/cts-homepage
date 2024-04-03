import { Settings } from 'react-slick';
import CaseStudie1 from '@/assets/images/slider 1.png';
import CaseStudie2 from '@/assets/images/slider 2.jpg';

export interface Slide {
  name: string;
  url: string;
  desc: string;
}

export const imagesData: Slide[] = [
  {
    name: 'Lorem ipsum dolor sit amet consectet. 1 ',
    url: CaseStudie1,
    desc: ' Viverra amet sit lacus sapien a nec nunc. Eget aliquam eu morbi at purus. A aenean aliquam diam lectus neque aliquam hendrerit cras. Viverra amet sit lacus sapien a nec nunc. Eget aliquam eu morbi at purus. A aenean aliquam diam lectus neque aliquam hendrerit cras.',
  },
  {
    name: 'Lorem ipsum dolor sit amet consectet. 2',
    url: CaseStudie2,
    desc: ' Viverra amet sit lacus sapien a nec nunc. Eget aliquam eu morbi at purus. A aenean aliquam diam lectus neque aliquam hendrerit cras. Viverra amet sit lacus sapien a nec nunc. Eget aliquam eu morbi at purus. A aenean aliquam diam lectus neque aliquam hendrerit cras.',
  },
];

export const settingsSlideCaseStudiesContent: Settings = {
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: false,
  speed: 300,
  focusOnSelect: true,
  infinite: true,
  autoplaySpeed: 5000,
  autoplay: true,
};

export const settingsSlideCaseStudiesImage: Settings = {
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: false,
  dots: false,
  focusOnSelect: true,
  infinite: true,
  autoplaySpeed: 5000,
  autoplay: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        autoplaySpeed: 5000,
        autoplay: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
        autoplaySpeed: 5000,
        autoplay: true,
      },
    },
  ],
};
