import black from './black';
import blue from './blue';
import gray from './gray';
import red from './red';

const size = {
  mobile: '375px',
  desktop: '1440px',
  tablet: '768px',
  largeTablet: '900px',
  smallDesktop: '1220px',
};

export const theme = {
  pallete: {
    common: {
      white: '#ffffff',
      blue: { blue },
      black: { black },
    },

    text: {
      primary: `${black.base}`,
      secondary: '#FFFFFF',
      tertiary: `${gray.dark}`,
    },

    blue: { blue },
    gray: { gray },
    black: { black },
    red: { red },

    typography: {
      htmlFontSize: '14px',
      fontFamily: 'Open Sans, sans-serif',
      fontRoboto: 'Roboto, sans-serif',
      fontNoto: 'Noto Sans JP, sans-serif',

      fontSize: {
        xs: '0.75rem', //12px
        base: '0.875rem', //14px
        lg: '1rem', //16px
        xl: '2rem', // 32px
        '2xl': '1.25rem', //20px
        '3xl': '2rem', //32px
        '4xl': '2.75rem', //44px
      },
      fontWeightRegular: 400,
      fontWeightMedium: 500,
      fontWeightExtraBold: 800,
      fontWeightSemiBold: 600,
      fontWeightBold: 700,
    },

    zIndex: {
      mobileStepper: 1000,
      fab: 1050,
      speedDial: 1050,
      appBar: 1100,
      drawer: 1200,
      modal: 1300,
      snackBar: 1400,
      toolTip: 1500,
    },
    device: {
      mb: `screen and (max-width: ${size.mobile})`,
      desktop: `screen and (max-width: ${size.desktop})`,
      smallDesktop: `screen and (max-width: ${size.smallDesktop})`,
      tablet: `screen and (max-width: ${size.tablet})`,
      lagreTablet: `screen and (max-width: ${size.largeTablet})`,
    },
    size,
  },
};
