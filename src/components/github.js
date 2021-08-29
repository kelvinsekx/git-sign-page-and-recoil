import React from "react";
import {GitBanner as Banner, GitCA as ExtraInfo} from "./static-utils";
import {Input, SubmitBtn} from "./reactish-utils";

import styled from "styled-components";
import {Card} from "grommet";

const {useState} = React;
const GithubSignup = () => {
	const [state, setState] = useState({
        username: "",
        password: "",
        done: false
    })

	const onSubmit = ()=> {
		setState({...state, done: true})
		return setTimeout(()=> {
			setState({...state, done: false})
		alert(state.username + " you're signed in")
	}, 2000)}
	const onChange = name => event => setState({...state, [name]: event.target.value})

	return <Styles>
	<div id="main">
		<Banner />
		<Card id="card">
			<form>
			<Input 
				For = "username"
				onChange={onChange("username")}
				st={state.username} />
			<Input 
				For= "password"
				onChange={onChange("password")}
				st={state.password} />
			<SubmitBtn 
				onSubmit={onSubmit}
				done={state.done} />
			</form>
		</Card>
		<ExtraInfo />
	</div>
	</Styles>
};

const Styles = styled.div`
padding-top: 1.8rem;
display: flex;
div#main{
	flex-basis: 12rem;
	margin: 0 auto;
	display: flex;
	gap:1em;
	flex-direction: column;
	align-items: center;
	#card{
		background-color:#F6F8FA ;
		border-radius: 5px;
		padding:1rem;
 		form{
			min-height: 12rem;
			display: flex;
			flex-direction: column;
			justify-content: space-around;
		}
	}
}
`

export default GithubSignup;
