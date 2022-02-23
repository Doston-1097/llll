import React from 'react';
import {useSelector} from "react-redux";
import {useForm} from "react-hook-form";
import {Box, Button, TextField} from "@mui/material";

function SignUp() {
    const nUser = useSelector((state) => state)
    const {register, handleSubmit, formState: {errors}} = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);
    console.log(nUser)
    return (
        <div className="flex justify-center">
            <form onSubmit={handleSubmit(onSubmit)}>
                <TextField sx={{width: "100%", mb: "15px"}} type="text" label="Full Name" {...register("Full Name", {
                    required: true,
                    maxLength: 30
                })} />
                <TextField sx={{width: "100%", mb: "15px"}} type="text" label="Email" {...register("Email", {
                    required: true,
                    pattern: /^\S+@\S+$/i
                })} />
                <TextField sx={{width: "100%", mb: "15px"}} type="tel"
                           label="Mobile number" {...register("Mobile number", {
                    required: true,
                    minLength: 6,
                    maxLength: 12
                })} />
                <TextField sx={{width: "100%", mb: "15px"}}
                           label="Password" type="password"  {...register("Password", { max: 30, min: 3, maxLength: 30})} />

                <div style={{width: "100%",display:"flex",justifyContent:"center",marginTop:"10px"}}>
                    <Button variant="contained" type="submit">Ro'yxatdan O'tish</Button>
                </div>

            </form>
        </div>
    );
}

export default SignUp;