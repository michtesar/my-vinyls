import {createTheme} from "@mui/material";

export function makeTheme(prefersDarkMode: boolean) {
    return createTheme({
        palette: {
            mode: prefersDarkMode ? 'dark' : 'light',
        }
    })
}

