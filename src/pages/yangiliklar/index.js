import React from 'react';
import { Typography} from "@mui/material";
import CardShare from "../../components/card/card";

function Yangiliklar(props) {
    return (
        <>
            <Typography variant="h1" component={"h1"}>Yangiliklar</Typography>
            <Typography component={"div"} className={"w-full flex items-center gap-12"}>
                <Typography component={"div"} className={"w-3/12"}>
                    <CardShare />
                </Typography>

            </Typography>


        </>
    );
}

export default Yangiliklar;