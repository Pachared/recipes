import type { Product } from '../data/recipes'

type ProductVisualProps = {
  product: Product
}

export function ProductVisual({ product }: ProductVisualProps) {
  return (
    <div className="product-visual">
      <img src={product.image} alt={product.name} />
      <span className="latin">{product.name}</span>
    </div>
  )
}
