import '@mantine/core/styles.css';

import { ColorSchemeScript, createTheme, MantineProvider } from '@mantine/core';

export const metadata = {
  title: process.env.NEXT_PUBLIC_APP_NAME,
  description: process.env.NEXT_PUBLIC_APP_DESCRIPTION,
};

const theme = createTheme({
  colors: {
    'tea-green': ['#2d331a', '#5b6635', '#88994f', '#acbb7b', '#ccd5ae', '#d6debe', '#e1e6cf', '#ebeedf', '#f5f7ef', '#ffffff'],
    beige: ['#3d4216', '#79842c', '#b3c146', '#ced788', '#e9edc9', '#edf1d4', '#f2f4df', '#f6f8ea', '#fbfbf4', '#ffffff'],
    cornsilk: ['#5d5103', '#baa206', '#f8dc27', '#fbeb84', '#fefae0', '#fefbe7', '#fefced', '#fffdf3', '#fffef9', '#ffffff'],
    'papaya-whip': ['#533e08', '#a57b10', '#eab227', '#f2d079', '#faedcd', '#fbf1d6', '#fcf4e0', '#fdf8eb', '#fefbf5', '#ffffff'],
    buff: ['#32210f', '#64411f', '#96622e', '#c58341', '#d4a373', '#dcb68f', '#e5c8ab', '#eedac7', '#f6ede3', '#ffffff'],
    'ash-gray': ['#282e23', '#4f5c47', '#778a6a', '#a0af97', '#cad2c5', '#d5dcd1', '#dfe4dc', '#eaede8', '#f4f6f3', '#ffffff'],
    'cambridge-blue': ['#19241b', '#314736', '#4a6b51', '#638e6c', '#84a98c', '#9cbaa3', '#b5ccba', '#ceddd1', '#e6eee8', '#ffffff'],
    'hookers-green': ['#111816', '#21312d', '#324943', '#426159', '#52796f', '#6d9c90', '#92b5ac', '#b6cdc8', '#dbe6e3', '#ffffff'],
    'dark-slate-gray': ['#0a0f10', '#151f20', '#1f2e30', '#2a3e40', '#354f52', '#527a7e', '#76a1a6', '#a4c0c3', '#d1e0e1', '#ffffff'],
    charcoal: ['#090c0e', '#13191c', '#1c252a', '#263238', '#2f3e46', '#4e6876', '#7290a1', '#a1b5c0', '#d0dae0', '#ffffff'],
  },
  primaryColor: 'dark-slate-gray', 
  fontFamily: 'Roboto, sans-serif',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider theme={theme}>{children}</MantineProvider>
      </body>
    </html>
  );
}