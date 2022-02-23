import { GlobalStyles } from "@mui/material";

const inputGlobalStyles = (mode) => (
    <GlobalStyles
        styles={{
            ...(mode === "light"
                ? {
                    ".MuiAutocomplete-option[aria-selected='true']": {
                        backgroundColor: "#123 !important",
                        color: "white",
                    },
                }
                : {
                    ".MuiAutocomplete-option[aria-selected='true']": {
                        backgroundColor: "#999 !important",
                        color: "white",
                    },
                }),
            body:{
                margin:"0"
            },
            ".MuiTab-root":{
                width:"50%"
            }
        }}
    />
);

export default inputGlobalStyles;
