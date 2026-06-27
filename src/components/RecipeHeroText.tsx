import type { Recipe } from '../data/recipes'

type RecipeHeroTextProps = {
  recipe: Recipe
  compact?: boolean
}

export function RecipeHeroText({ recipe, compact = false }: RecipeHeroTextProps) {
  return (
    <div className={compact ? 'recipe-hero-text compact' : 'recipe-hero-text'}>
      <p className="recipe-title latin">{recipe.title}</p>
      <p className="recipe-meta latin">
        {recipe.minutes} mins <span>|</span> {recipe.servings} servings
      </p>
    </div>
  )
}
