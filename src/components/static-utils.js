import React from "react";
import {Github} from "grommet-icons";
import styled from "styled-components";

export const GitBanner = ()=><div 
	style={{
		display: "flex", 
		flexDirection: "column",
		alignItems: 'center',
		flexBasis: "6rem",
		justifyContent: "space-between"}}>
	<Github color='plain' size='large' />
	<div style={{fontSize: "130%"}}>
		Sign in to Github
	</div>
</div>

export const GitCA = ()=> <StyledCA>
 <div>
	New to Github? <span>Create an account.</span>	
</div>	
</StyledCA>;

const StyledCA = styled.div`
border: 1px solid rgba(0,0,0,0.2);
border-radius: 5px;
width: 16rem;
padding: 0.4em 0;
span{
	color: rgb(18, 180, 48);
}
`
