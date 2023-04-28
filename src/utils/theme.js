import { createTheme, responsiveFontSizes } from '@mui/material';

export function createCustomTheme(options = {}) {
  const {
    palette = {
      primary: {
        main: '#3e7844',
        light: '#e7f4e4',
      },
      secondary: {
        main: '#0A090B',
        light: 'rgb(255, 85, 166)',
        dark: 'rgb(178, 0, 81)',
        contrastText: '#fff',
      },
      text: {
        primary: '#000000',
        secondary: '#001B36',
        blue: '#007BFF',
        darkgray: '#475467',
        disabled: 'rgba(0, 0, 0, 0.38)',
        hint: 'rgba(0, 0, 0, 0.38)',
      },
      background: {
        paper: '#fff',
        default: '#F8FAFB',
      },
    },
    typography = {
      fontFamily: 'Unbounded,Roboto, sans-serif',
      h1: {
        fontFamily: 'Unbounded,Roboto, sans-serif',
        fontSize: '40px',
        lineHeight: 2,
        fontWeight: 700,
        marginTop: '5px',
        color: palette.text.primary,
      },
      h2: {
        fontFamily: 'Unbounded,Roboto, sans-serif',
        fontWeight: 700,
        fontSize: '24px',
        lineHeight: 1,
        color: palette.primary.main,
      },
      h3: {
        fontFamily: 'Unbounded,Roboto, sans-serif',
        fontWeight: 700,
        fontSize: '18px',
        lineHeight: 1,
      },
      h4: {
        fontFamily: 'Unbounded,Roboto, sans-serif',
        marginTop: '5px',
        fontWeight: 700,
        fontSize: '14px',
        lineHeight: 1,
        color: palette.text.secondary,
      },
      h5: {
        fontFamily: 'Unbounded,Roboto, sans-serif',
        marginTop: '5px',
        fontWeight: 700,
        fontSize: '16px',
        lineHeight: 2,
        color: palette.text.blue,
        cursor: 'pointer',
      },
      h6: {
        fontFamily: 'Unbounded,Roboto, sans-serif',
        marginTop: '5px',
        fontWeight: 700,
        fontSize: '14px',
        lineHeight: 2,
        color: palette.text.darkgray,
      },
      subtitle1: {
        fontFamily: 'Unbounded,Roboto, sans-serif',
        fontWeight: 700,
        fontSize: '1rem',
        lineHeight: 1.5,
      },
      subtitle2: {
        fontFamily: 'Unbounded,Roboto, sans-serif',
        fontWeight: 700,
        fontSize: '0.875rem',
        lineHeight: 1.5,
        marginTop: '10px',
      },
      body1: {
        fontFamily: 'Unbounded,Roboto, sans-serif',
        fontWeight: 700,
        fontSize: '14px',
        lineHeight: 1,
        color: palette.text.secondary,
      },
      body2: {
        fontFamily: 'Unbounded,Roboto, sans-serif',
        fontWeight: 500,
        fontSize: '0.875rem',
        lineHeight: 1,
        color: palette.text.primary,
      },

      button: {
        fontFamily: 'Unbounded,Roboto, sans-serif',
        fontWeight: 500,
        fontSize: '14px',
        color: '#fff',
        borderRadius: '50px',
        height: '40px',
        background: palette.primary.main,
      },
    },
    shape = {
      borderRadius: 8,
    },

    ...other
  } = options;

  let theme = createTheme({
    palette,
    typography,
    shape,
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'capitalize',
            borderRadius: '50px',
            boxShadow: '0pc 3px 6px #00000029',
            height: '40px',
            color: '#fff',
            '&:hover': {
              backgroundColor: palette.primary.light, // new hover color for secondary button
              border: '1px solid green',
              color: 'green',
            },
          },
          containedSecondary: {
            '&:hover': {
              transiton: '.5s easeInOut',
              backgroundColor: palette.secondary.main, // new hover color for secondary button
              color: 'green',
            },
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            '& .MuiOutlinedInput-root': {
              borderRadius: '50px',
              background: '#fff',
              color: '#3e7844',
              border: '1px solid #3e7844',
              height: '40px',
              '&:hover': {
                border: '1px solid #3e7844',
              },
              '&.Mui-focused': {
                border: '1px solid #3e7844',
              },
              '& fieldset': {
                borderColor: '#3e7844',
              },
              '&:hover fieldset': {
                borderColor: '#3e7844',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#3e7844',
                border: '1px solid #3e7844',
              },
            },
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            border: '1px solid #e7f4e4',
            background: '#e7f4e4',
            borderRadius: '10px',
            boxShadow: 'none',
          },
        },
      },
    },
    ...other,
  });

  theme = responsiveFontSizes(theme);

  return theme;
}
