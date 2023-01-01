/**
 * This file be used for any manipulation like TS defs
 */
export { default } from 'styled-components';
export * from 'styled-components';

// TODO: @Mukul, create a custom provider here for better theme handling

// colors, borders radius, shadows
// TODO: @sarthak
const lightTheme = {
  primary: 'blue',
  text: 'black',
  baseBackground: '#f9fcff',
  light: '#fff',
};

const constants = {
  borderRadius: {
    md: '4px',
    lg: '8px',
  },
};

export const theme = {
  colors: lightTheme,
  constants,
};

export type ITheme = typeof theme;
