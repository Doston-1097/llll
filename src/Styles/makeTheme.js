import { createTheme } from "@mui/material";
import { grey, indigo } from "@mui/material/colors";

const makeTheme = (mode) =>
    createTheme({
        palette: {
            mode: mode,
            ...(mode === "light"
                ? {
                    primary: {
                        main: indigo[400],
                        // contrastText: "#fff",
                    },
                }
                : {
                    primary: {
                        main: grey[700],
                        // contrastText: "#fff",
                    },
                }),
        },
        shape: {
            borderRadius: 12,
        },
    });

export default makeTheme;
