import React from "react"
import {TextInput, Button as GrommetButton} from "grommet"
import styled from "styled-components"

export const Input = ({For, onChange, st})=> 
<StyledInput>
	{For === "username" ? 
	<div style={{textAlign: "left",fontSize: "80%", paddingBottom:"0.2em"}}>Username or email address</div> :
	<div style={{paddingBottom: "0.2em",display: "flex", fontSize: "80%",justifyContent: "space-between"}}>
		<span>Password</span>
	<span style={{color: '#1d4eee'}}>forgot password?</span>
	</div>}
    <TextInput 
        name={For}
        value={st}
        onChange={onChange}
        type= {For === "password" ? "password" : "text"}
    />
</ StyledInput>

const StyledInput = styled.div`
input{
    height: 1.8em;
    width: 16rem;
    background-color: white;
}
`


export const SubmitBtn = ({onSubmit, done})=> 
<StyledBtn>
<GrommetButton
    primary 
    onClick={onSubmit}
    disabled={!done ? false : true}
    label= {!done ? "Sign in" : "signing in..."}
/>
</StyledBtn>;
const StyledBtn = styled.div`
button{
    width: 16rem;
    font-size: 95%;
    background-color: rgb(8, 165, 8);
    border-radius: 5px;
    &:disabled{
        background-color: rgba(8, 175, 8);
        opacity: 0.76;
    },
}
`
