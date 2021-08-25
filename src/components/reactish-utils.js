import React from "react"
import {TextInput, Button as GrommetButton} from "grommet"
import styled from "styled-components"

export const Input = ({For, onChange, st})=> 
<StyledInput>
    <div style={{textAlign: "left", paddingBottom:"0.2em"}}>{For}</div>
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
    width: 14rem;
    background-color: white;
}
`


export const SubmitBtn = ({onSubmit, done})=> 
<StyledBtn>
<GrommetButton
    primary 
    onClick={onSubmit}
    disabled={done ? false : true}
    label= {done ? "Sign in" : "signing in..."}
/>
</StyledBtn>;
const StyledBtn = styled.div`
button{
    width: 14rem;
    background-color: green;
    border-radius: 5px;
}
`