import noodleImage from '../assets/noodle-hero.jpg'
import mangoImage from '../assets/mango-menu.jpg'
import cornImage from '../assets/corn-menu.jpg'
import chiliPasteImage from '../assets/product-chili-paste.jpg'
import chiliSauceImage from '../assets/product-chili-sauce.jpg'
import coconutImage from '../assets/product-coconut.jpg'
import riceNoodlesImage from '../assets/product-rice-noodles.jpg'
import stickyRiceImage from '../assets/product-sticky-rice.jpg'
import sweetCornImage from '../assets/product-sweet-corn.jpg'

export type Product = {
  name: string
  image: string
}

export type Recipe = {
  id: string
  title: string
  titleThai: string
  image: string
  minutes: number
  servings: number
  products: Product[]
  ingredients: string[]
  directions: string[]
}

export const recipes: Recipe[] = [
  {
    id: 'thang-noodle',
    title: 'THANG NOODLE',
    titleThai: 'ก๋วยเตี๋ยวไก่',
    image: noodleImage,
    minutes: 20,
    servings: 4,
    products: [
      { name: 'Rice Stick', image: riceNoodlesImage },
      { name: 'Chili Paste', image: chiliPasteImage },
    ],
    ingredients: [
      'Rice stick noodles',
      'Chicken breast',
      'Bean sprouts',
      'Pickled mustard greens',
      'Fried garlic',
      'Coriander',
      'Spring onions',
    ],
    directions: ['Cook rice stick noodles until tender.', 'Prepare chicken and vegetables.'],
  },
  {
    id: 'mango-sticky-rice',
    title: 'MANGO STICKY RICE',
    titleThai: 'ข้าวเหนียวมะม่วง',
    image: mangoImage,
    minutes: 25,
    servings: 4,
    products: [
      { name: 'Coconut Milk', image: coconutImage },
      { name: 'Sticky Rice', image: stickyRiceImage },
    ],
    ingredients: ['Sticky rice', 'Ripe mango', 'Coconut milk', 'Palm sugar', 'Salt', 'Mung beans'],
    directions: ['Steam sticky rice until cooked.', 'Make coconut sauce and serve with mango.'],
  },
  {
    id: 'corn-spicy-salad',
    title: 'CORN SPICY SALAD',
    titleThai: 'ยำข้าวโพด',
    image: cornImage,
    minutes: 10,
    servings: 2,
    products: [
      { name: 'Sweet Corn', image: sweetCornImage },
      { name: 'Chili Sauce', image: chiliSauceImage },
    ],
    ingredients: ['Sweet corn', 'Shrimp', 'Cherry tomatoes', 'Long beans', 'Lime juice', 'Fish sauce', 'Chili'],
    directions: ['Boil shrimp and corn, cut to pieces.', 'Mix all ingredients with dressing.'],
  },
]

export const homeRecipe = recipes[0]
