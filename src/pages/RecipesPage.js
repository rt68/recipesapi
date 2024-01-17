import RandomRecipe from '../components/RandomRecipe'
import IngredientsRecipe from '../components/IngredientsRecipe'
import SearchPantry from '../components/SearchPantry'

export default function RecipesPage() {
    return(
        <div>
        <RandomRecipe />
        <SearchPantry />
         <IngredientsRecipe />
        </div>
    )
};