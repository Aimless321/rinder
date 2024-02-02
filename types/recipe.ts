export interface Recipe {
    id: number,
    title: string,
    image: string,
    summary: string,
    imageType: string,
    cuisines: string[],
    dishTypes: string[],
    extendedIngredients: Ingredient[]
}

export interface Ingredient {
    id: number,
    image: string,
    name: string,
    nameClean: string,
    amount: number,
    measures: IngredientMeasures,
}

export interface IngredientMeasures {
    us: IngredientMeasure,
    metric: IngredientMeasure,
}

export interface IngredientMeasure {
    amount: number
    unitShort: string,
    unitLong: string,
}

export interface LikedRecipe {
    recipe_id: number,
    date: string,
    recipe: Recipe,
}