import bgContactUs from '@/assets/images/contact/contactbg.png';
export const contactImageURL = bgContactUs;

export const listInput = [
  {
    id: 1,
    inputs: [
      { id: '1', placeholder: 'yourName', isRequired: true },
      {
        id: '2',
        placeholder: 'yourEmail',
        isRequired: true,
      },
    ],
  },
  {
    id: 2,
    inputs: [
      {
        id: '3',
        placeholder: 'yourPhone',
        isRequired: true,
      },
      { id: '4', placeholder: 'subject' },
    ],
  },
];
