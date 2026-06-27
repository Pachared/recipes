import { IconButton } from '@mui/material'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import type { Recipe } from '../data/recipes'
import { ProductVisual } from './ProductVisual'
import { RecipeHeroText } from './RecipeHeroText'
import { StopwatchBadge } from './StopwatchBadge'

type RecipeCardProps = {
  recipe: Recipe
  onPrevious: () => void
  onNext: () => void
}

export function RecipeCard({ recipe, onPrevious, onNext }: RecipeCardProps) {
  return (
    <article className="menu-card">
      <section className="menu-photo" style={{ backgroundImage: `url(${recipe.image})` }}>
        <div className="photo-gradient" />
        <RecipeHeroText recipe={recipe} />
        <IconButton className="image-arrow left" aria-label="เมนูก่อนหน้า" onClick={onPrevious}>
          <ChevronLeftIcon />
        </IconButton>
        <IconButton className="image-arrow right" aria-label="เมนูถัดไป" onClick={onNext}>
          <ChevronRightIcon />
        </IconButton>
      </section>

      <section className="menu-details">
        <div className="products-block">
          <h2 className="latin">PRODUCTS</h2>
          <div className="product-stack">
            {recipe.products.map((product) => (
              <ProductVisual key={product.name} product={product} />
            ))}
          </div>
        </div>

        <div className="ingredients-block">
          <h2 className="latin">INGREDIENTS</h2>
          <ul className="latin">
            {recipe.ingredients.map((ingredient) => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </ul>
          <div className="dashed-line" />
          <h2 className="latin directions-heading">DIRECTIONS</h2>
          <ol className="latin">
            {recipe.directions.map((direction) => (
              <li key={direction}>{direction}</li>
            ))}
          </ol>
        </div>

        <StopwatchBadge minutes={recipe.minutes} />
      </section>
    </article>
  )
}
