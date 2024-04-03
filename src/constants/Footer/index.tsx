import FacebookIcon from '@/assets/icons/footer/baseline-facebook.svg';
import TelegramIcon from '@/assets/icons/footer/baseline-telegram.svg';
import LinkeinIcon from '@/assets/icons/footer/baseline_linkedin.svg';

import LocationIcon from '@/assets/icons/footer/location-marker.svg';
import EmailIcon from '@/assets/icons/footer/mail.svg';
import PhoneIcon from '@/assets/icons/footer/contact.svg';
import ClockIcon from '@/assets/icons/footer/clock.svg';

export const listIconSoci = [
  {
    id: 1,
    alt: 'Logo facebook',
    icon: FacebookIcon,
  },
  {
    id: 2,
    alt: 'Logo telegram',
    icon: TelegramIcon,
  },
  {
    id: 3,
    alt: 'Logo linkedin',
    icon: LinkeinIcon,
  },
];

export const listFooterService = {
  title: 'footer.services.title',
  data: [
    {
      id: 1,
      title: 'footer.services.consultingAndBrandDesign',
    },
    {
      id: 2,
      title: 'footer.services.websiteLandingPageDesign',
    },
    {
      id: 3,
      title: 'footer.services.scriptDevelopmentAndVideoPproduction',
    },
    {
      id: 4,
      title: 'footer.services.implementDigitalMarketing',
    },
  ],
};

export const listFooterContact = {
  title: 'footer.contact.title',
  data: [
    {
      id: 1,
      icon: LocationIcon,
      title: 'footer.contact.address',
    },
    {
      id: 2,
      icon: EmailIcon,
      title: 'footer.contact.contactEmail',
    },
    {
      id: 3,
      icon: PhoneIcon,
      title: 'footer.contact.phone',
    },
    {
      id: 4,
      icon: ClockIcon,
      title: 'footer.contact.workTime',
    },
  ],
};
