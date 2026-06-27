import type { Recipe } from '../data/recipes'
import { RecipeHeroText } from '../components/RecipeHeroText'

type HomePageProps = {
  recipe: Recipe
  onOpenMenu: () => void
}

export function HomePage({ recipe, onOpenMenu }: HomePageProps) {
  return (
    <main className="home-page" style={{ backgroundImage: `url(${recipe.image})` }}>
      <div className="home-vignette" />
      <section className="home-content">
        <RecipeHeroText recipe={recipe} />
        <button className="home-action thai" type="button" onClick={onOpenMenu}>
          เปิดเมนูทั้งหมด
        </button>
      </section>
    </main>
  )
}
