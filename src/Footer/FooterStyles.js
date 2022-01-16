import styled from 'styled-components';

export const SocialContainer = styled.div`
	display: flex;
  	align-items: center;
`

export const SocialIcons = styled.a`
transition: 0.3s ease;
color: white;
border-radius: 50px;
  padding: 8px;
&:hover {
    background-color: #212d45;
    transform: scale(1.2);
    cursor: pointer;
  }
`