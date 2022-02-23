import React, {createContext, useState} from 'react';
import makeTheme from "./Styles/makeTheme";
import {Provider} from "react-redux";
import store from "./redux";
import {ThemeProvider} from "@mui/material/styles"
import {Container, Grid, Paper} from "@mui/material";
import inputGlobalStyles from "./Styles/GlobalStyle";
import Sign from "./pages/Sign";
import User from "./pages/user";

export const DarkModeContext = createContext({
    mode: "light",
    toggleMode: () => {
    },
});

function App(props) {
    const [mode, setMode] = useState("light");

    const theme = makeTheme(mode);
    return (
        <Provider store={store}>
            <DarkModeContext.Provider value={{
                mode,
                toggleMode: () => setMode(mode === "light" ? "dark" : "light")
            }}>
                <ThemeProvider theme={theme}>
                    {inputGlobalStyles(mode)}
                    <Paper sx={{boxShadow: "none", display: "flex", borderRadius: "0", minHeight: "100vh"}}>

                        <Container className="bg-yellow-600">
                            <User/>
                            <Grid sx={{mt:["100px"]}} container direction="row"
                                  justifyContent="center"
                                  alignItems="center">
                                <Grid item lg={4} xs={6} md={6} sx={{minHeight:"100vh"}}>
                                    <Sign/>
                                </Grid>
                            </Grid>

                        </Container>
                    </Paper>
                </ThemeProvider>
            </DarkModeContext.Provider>
        </Provider>
    );
}

export default App;