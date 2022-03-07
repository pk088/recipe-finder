import { useState } from 'react';
import "./App.css"
import axios from 'axios';
import styled from 'styled-components'
import { Header, AppNameComponent, AppIcon, SearchComponent, SearchInput, SearchIcon } from './Components/HeaderComponent';
// import { RecipeContainer, CoverImage, RecipeName, IngrediantsText, SeeMoreText } from './Components/RecipeComponent';
import { Placeholder } from './Components/RecipeComponent';
import RecipeComponent from './Components/RecipeComponent';


const APP_ID = "095a8be3";
const APP_KEY = "f6c8032292cc278234d21cfcd159ee71";

const Container = styled.div`
display: flex;
flex-direction: column;
`;

const RecipeListContainer = styled.div`
display: flex;
flex-direction: row;
flex-wrap:wrap;
padding: 30px;
gap 20px;
justify-content: space-evenly; 
`;



function App() {

  const [timeoutID, setTimeoutID] = useState();
  const [recipeList, setRecipeList] = useState([]);

  const fetchRecipe = async (searchString) => {
    const response = await axios.get(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${searchString}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    setRecipeList(response.data.hits);
  }

  const onTextChange = (event) => {
    clearTimeout(timeoutID);
    const timeout = setTimeout(() => fetchRecipe(event.target.value), 500)
    setTimeoutID(timeout);
  }
  // console.log(timeoutID);
  return (
    <Container>
      <Header>
        <AppNameComponent><AppIcon src='hamburger.svg' />
          Recipe Finder
        </AppNameComponent>
        <SearchComponent>
          <SearchIcon src="/search-icon.svg" />
          <SearchInput placeholder='Search Recipe' onChange={onTextChange} />
        </SearchComponent>
      </Header>

      <RecipeListContainer>
        {recipeList.length ?
          recipeList.map((recipeObj, index) => {
            return <RecipeComponent key={index} recipeObj = {recipeObj.recipe}  />

          })
          :
          <Placeholder src='Food-logo.jpg' />
        }
      </RecipeListContainer>
    </Container>
  );
}

export default App;
