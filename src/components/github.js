import React from "react";
import {GitBanner as Banner, GitCA as ExtraInfo} from "./static-utils";
import {Input, SubmitBtn} from "./reactish-utils";

import styled from "styled-components";
import {Card} from "grommet";

import { useRecoilState } from "recoil";
import {logInfo, doneTask} from "./../stateManager";

const GithubSignup = () => {
	const [state, setState] = useRecoilState(logInfo);
	const [done, setDone] = useRecoilState(doneTask);

	const onSubmit = ()=> {
		setDone(false)
		return setTimeout(()=> {
		setDone(true)
		alert(state.username + " you're signed in")
	}, 2000)}
	const onChange = name => event => setState({...state, [name]: event.target.value})

	return <StyledMain>
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
				done={done} />
			</form>
		</Card>
		<ExtraInfo />
	</div>
	</StyledMain>
};

const StyledMain = styled.div`
padding-top: 1.8rem;
//display: flex;
div#main{
	width: 35vw;
	margin: 0 auto;
	display: flex;
	gap:1em;
	flex-direction: column;
	align-items: center;
	//border: 1px solid red;back#F6F8FA for btn#2C974B forlinks:#C0F8FA
	#card{
		background-color: rgba(28, 39, 71, 0.3);
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
