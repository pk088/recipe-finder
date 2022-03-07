import styled from "styled-components";

export const Header = styled.div`
color: white;
background-color: black;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
padding: 20px;
font-size: 25px;
font-weight: bold;
box-shadow: 0 3px 6px #555;
`;

export const AppNameComponent = styled.div`
display: flex;
align-items: center;
`;

export const AppIcon = styled.img`
height: 36px;
width: 36px;
margin: 15px;
`;

export const SearchComponent = styled.div`
display: flex;
flex-direction: row;
background-color: white;
padding: 10px;
border-radius: 6px;
width: 50%;
`;

export const SearchIcon = styled.img`
width: 32px;
height: 32px;
`

export const SearchInput = styled.input`
border: none;
outline: none;
margin-left: 0.5rem;
font-size: 16px;
font-weight: bold;
width: 100%;
`;