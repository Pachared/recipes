import type { Recipe } from '../data/recipes'
import { RecipeCard } from '../components/RecipeCard'

type MenuPageProps = {
  recipes: Recipe[]
  activeIndex: number
  onChangeIndex: (index: number) => void
}

export function MenuPage({ recipes, activeIndex, onChangeIndex }: MenuPageProps) {
  const activeRecipe = recipes[activeIndex]

  const move = (step: number) => {
    onChangeIndex((activeIndex + step + recipes.length) % recipes.length)
  }

  return (
    <main className="menu-page">
      <section className="menu-stage">
        <div className="menu-heading">
          <p className="thai">เมนูแนะนำ</p>
          <h1 className="latin">{activeRecipe.title}</h1>
          <span className="thai">{activeRecipe.titleThai}</span>
        </div>

        <RecipeCard recipe={activeRecipe} onPrevious={() => move(-1)} onNext={() => move(1)} />
      </section>
    </main>
  )
}
