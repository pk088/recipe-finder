import { useState } from "react";
import styled from "styled-components";
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from "@mui/material/DialogActions";

export const RecipeContainer = styled.div`
display:flex;
flex-direction: column;
padding: 30px;
width: 300px;
border-radius: 10px;
box-shadow: 0 3px 10px 0 #aaa;
margin: 20px 0;
`;

export const Placeholder = styled.img`
width:220px;
margin:200px;
opacity:60%
`;

export const CoverImage = styled.img`
height: 200px;
border-radius: 5px;
object-fit: cover;
`;

export const RecipeName = styled.span`
font-size: 18px;
font-weight: bold;
color: black;
margin: 10px 0;
`;

export const IngrediantsText = styled.span`
font-size: 18px;
border: 1px solid green;
color: black;
cursor: pointer;
padding: 10px 15px;
border-radius: 6px;
color: green:
text-align: center;
margin-bottom: 12px;

&:hover {
    background-color: #73EA66;
    color: white;
}
`;

export const SeeMoreText = styled(IngrediantsText)`
color: #eb3300;
border: 1px solid #eb3300;

&:hover {
    background-color: tomato;
    color: white;
}

`;

const RecipeComponent = ({ recipeObj }) => {

    const [show, setShow] = useState(false);


    return (

        <>
            <Dialog open={show}>
                <DialogTitle id="alert-dialog-slide-title">Ingredients</DialogTitle>
                <DialogContent>

                    <table>
                        <thead>
                            <th>Ingredients</th>
                            <th>Weight</th>
                        </thead>
                        <tbody>
                            {recipeObj.ingredients.map((ingreObj, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{ingreObj.text}</td>
                                        <td>{ingreObj.weight} g</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </DialogContent>
                <DialogActions>
                    <IngrediantsText onClick={() => window.open(recipeObj.url)}>See more</IngrediantsText>
                    <SeeMoreText onClick={() => setShow(false)}>Close</SeeMoreText>
                </DialogActions>
            </Dialog>
            <RecipeContainer>
                <CoverImage src={recipeObj.image} />
                <RecipeName>{recipeObj.label}</RecipeName>
                <IngrediantsText onClick={() => setShow(true)}>Ingrediants</IngrediantsText>
                <SeeMoreText onClick={() => window.open(recipeObj.url)}>See Complete Recipe</SeeMoreText>
            </RecipeContainer>
        </>
    )
}


export default RecipeComponent;