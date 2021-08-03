import styled from 'styled-components';

export const InconstContainer= styled.div`
z-index:1;
width: 100%;
max-width: 1100px;
margin-right: auto;
margin-left: auto;
padding: 0 24px;
display:flex;
flex-direction: column;
align-items: center;
justify-content: center;
background: transparent;
`;

export const InconstImageWrapper= styled.div`
width: 100%;
max-width: 1100px;
overflow-wrap: center;
`;

export const InconstImage = styled.img`
width: 100%;
max-width:1100px;
margin: 0 0 10px 0;`;

export const InconstTextWrapper= styled.div`
background: rgba( 255, 255, 255, 0.65 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 1.5px );
-webkit-backdrop-filter: blur( 1.5px );
border-radius: 10px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 70%;
`;

export const InconstTitle= styled.h4``;
export const InconstDesc= styled.p``;