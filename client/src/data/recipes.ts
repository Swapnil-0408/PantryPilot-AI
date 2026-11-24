export type Recipe = {
  id: number;
  title: string;
  image: string;
  ingredients: string[];
  instructions: string[];
  difficulty: string;
  cookTime: string;
  servings: string;
};

export const recipes: Recipe[] = [
  {
    id: 1,
    title: "Tomato Pasta",
    image: "https://picsum.photos/600/400?random=1",
    ingredients: [
      "Tomatoes",
      "Pasta",
      "Garlic",
      "Olive Oil",
      "Salt",
      "Black Pepper"
    ],
    instructions: [
      "Boil water in a large pot.",
      "Cook the pasta until soft.",
      "Heat olive oil in a pan.",
      "Add garlic and tomatoes.",
      "Mix the cooked pasta with the sauce.",
      "Serve hot."
    ],
    difficulty: "Easy",
    cookTime: "20 mins",
    servings: "2",
  },

  {
    id: 2,
    title: "Egg Sandwich",
    image: "https://picsum.photos/600/400?random=2",
    ingredients: [
      "Eggs",
      "Bread",
      "Butter",
      "Cheese",
      "Salt"
    ],
    instructions: [
      "Boil or fry the eggs.",
      "Toast the bread.",
      "Spread butter.",
      "Add eggs and cheese.",
      "Serve warm."
    ],
    difficulty: "Easy",
    cookTime: "10 mins",
    servings: "1",
  },

  {
    id: 3,
    title: "Vegetable Curry",
    image: "https://picsum.photos/600/400?random=3",
    ingredients: [
      "Potatoes",
      "Carrots",
      "Beans",
      "Onions",
      "Spices"
    ],
    instructions: [
      "Heat oil.",
      "Cook onions.",
      "Add vegetables.",
      "Add spices.",
      "Cook for 25 minutes.",
      "Serve with rice."
    ],
    difficulty: "Medium",
    cookTime: "35 mins",
    servings: "4",
  },

  {
    id: 4,
    title: "Fruit Yogurt Bowl",
    image: "https://picsum.photos/600/400?random=4",
    ingredients: [
      "Yogurt",
      "Banana",
      "Apple",
      "Honey",
      "Granola"
    ],
    instructions: [
      "Slice the fruits.",
      "Add yogurt.",
      "Mix gently.",
      "Drizzle honey.",
      "Top with granola."
    ],
    difficulty: "Easy",
    cookTime: "5 mins",
    servings: "1",
  },
];