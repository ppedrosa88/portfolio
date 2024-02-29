import { createTheme } from "@mui/material";

export const LightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#fefefe',
            light: '#42a5f5',
            dark: '#42a5f5',
            contrastText: '#fff',
        },
        secondary: {
            main: '#077784',
            light: '#ba68c8',
            dark: '#7b1fa2',
            contrastText: '#fff',
        },
        terciary: {
            main: '#e8c348',
            contrastText: '#fefefe'
        },
        white: {
            main: '#fff',
        },
        error: {
            main: '#d32f2f',
            light: '#ef5350',
            dark: '#c62828',
            contrastText: '#fff',
        },
        warning: {
            main: '#cd553c',
            light: '#ff9800',
            dark: '#e65100',
            contrastText: '#fff',
        },
        info: {
            main: '#0288d1',
            light: '#03a9f4',
            dark: '#01579b',
            contrastText: '#fff',
        },
        success: {
            main: '#2e7d32',
            light: '#4caf50',
            dark: '#1b5e20',
            contrastText: '#fff',
        },
        text: {
            primary: '#282624',
            secondary: 'rgba(0, 0, 0, 0.6)',
            disabled: 'rgba(0, 0, 0, 0.38)',
            icon: 'rgba(0, 0, 0, 0.12)'
        },
        divider: '#00D9D5',
        background: {
            paper: '#fefefe',
            default: '#fefefe'
        },
        action: {
            active: 'rgba(0, 0, 0, 0.54)',
            hover: 'rgba(0, 0, 0, 0.04)',
            selected: 'rgba(0, 0, 0, 0.08)',
            disabled: 'rgba(0, 0, 0, 0.26)',
            disabledBackground: 'rgba(0, 0, 0, 0.12)',
            focus: 'rgba(0, 0, 0, 0.12)'
        }
    },
});


export const DarkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#8dfce3',
            light: '#e3f2fd',
            dark: '#42a5f5',
            contrastText: 'rgba(0, 0, 0, 0.87)',
        },
        secondary: {
            // main: '#FBDB04',
            main: '#00D9D5',
            light: '#f3e5f5',
            dark: '#ab47bc',
            contrastText: 'rgba(0, 0, 0, 0.87)',
        },
        terciary: {
            main: '#fbdb04',
            contrastText: '#000'
        },
        white: {
            main: '#fff',
        },
        error: {
            main: '#f44336',
            light: '#e57373',
            dark: '#d32f2f',
            contrastText: 'rgba(0, 0, 0, 0.87)',
        },
        warning: {
            main: '#ffa726',
            light: '#ffb74d',
            dark: '#f57c00',
            contrastText: 'rgba(0, 0, 0, 0.87)',
        },
        info: {
            main: '#29b6f6',
            light: '#4fc3f7',
            dark: '#0288d1',
            contrastText: 'rgba(0, 0, 0, 0.87)',
        },
        success: {
            main: '#66bb6a',
            light: '#81c784',
            dark: '#388e3c',
            contrastText: 'rgba(0, 0, 0, 0.87)',
        },
        text: {
            primary: '#ffffff',
            secondary: 'rgba(255, 255, 255, 0.7)',
            disabled: 'rgba(255, 255, 255, 0.5)',
            icon: 'rgba(255, 255, 255, 0.12)'
        },
        divider: '#00D9D5',
        background: {
            paper: '#121212',
            default: '#121212'
        },
        action: {
            active: '#fff',
            hover: 'rgba(255, 255, 255, 0.08)',
            selected: 'rgba(255, 255, 255, 0.16)',
            disabled: 'rgba(255, 255, 255, 0.3)',
            disabledBackground: 'rgba(255, 255, 255, 0.12)',
            focus: 'rgba(255, 255, 255, 0.12)'
        }
    }
});




