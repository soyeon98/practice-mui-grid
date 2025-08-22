import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme({
    palette: {
        primary: { main: "#1976d2" },
        secondary: { main: "#dc004e" }
    },
    typography: {
        fontFamily: "Roboto, Arial",
    }
});

export default function Apptheme({ children }) {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
}