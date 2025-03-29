export interface Recipe {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  prepTime: string;
  cookTime: string;
  servings: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  ingredients: string[];
  instructions: string[];
  tags: string[];
}

export const recipes: Recipe[] = [
  // Breakfast Recipes
  {
    id: 'fluffy-pancakes',
    title: 'Fluffy American Pancakes',
    description: 'Light and fluffy pancakes served with maple syrup and fresh berries',
    category: 'breakfast',
    image: '/images/recipes/pancakes.jpg',
    prepTime: '10 mins',
    cookTime: '15 mins',
    servings: 4,
    difficulty: 'Easy',
    ingredients: [
      '2 cups all-purpose flour',
      '2 tablespoons sugar',
      '2 teaspoons baking powder',
      '1/2 teaspoon salt',
      '2 large eggs',
      '1 3/4 cups milk',
      '1/4 cup melted butter',
      'Fresh berries and maple syrup for serving'
    ],
    instructions: [
      'Mix dry ingredients in a large bowl',
      'Whisk wet ingredients in another bowl',
      'Combine wet and dry ingredients until just mixed',
      'Cook on a hot griddle until bubbles form',
      'Flip and cook until golden brown',
      'Serve with berries and maple syrup'
    ],
    tags: ['breakfast', 'sweet', 'classic', 'vegetarian']
  },
  {
    id: 'avocado-toast',
    title: 'Gourmet Avocado Toast',
    description: 'Creamy avocado on sourdough with poached eggs and microgreens',
    category: 'breakfast',
    image: '/images/recipes/avocado-toast.jpg',
    prepTime: '10 mins',
    cookTime: '5 mins',
    servings: 2,
    difficulty: 'Easy',
    ingredients: [
      '2 slices sourdough bread',
      '2 ripe avocados',
      '2 fresh eggs',
      'Red pepper flakes',
      'Sea salt and black pepper',
      'Microgreens or sprouts',
      'Extra virgin olive oil'
    ],
    instructions: [
      'Toast the sourdough bread until golden',
      'Mash avocados with salt and pepper',
      'Poach eggs until whites are set',
      'Spread avocado on toast',
      'Top with poached eggs',
      'Garnish with microgreens and red pepper flakes'
    ],
    tags: ['breakfast', 'healthy', 'vegetarian', 'trendy']
  },
  {
    id: 'overnight-oats',
    title: 'Berry Overnight Oats',
    description: 'Creamy overnight oats with fresh berries and honey',
    category: 'breakfast',
    image: '/images/recipes/overnight-oats.jpg',
    prepTime: '5 mins',
    cookTime: '0 mins',
    servings: 2,
    difficulty: 'Easy',
    ingredients: [
      '1 cup rolled oats',
      '1 cup almond milk',
      '1/2 cup Greek yogurt',
      '1 tablespoon chia seeds',
      '1 tablespoon honey',
      'Mixed berries',
      'Sliced almonds'
    ],
    instructions: [
      'Mix oats, milk, yogurt, and chia seeds',
      'Add honey and stir well',
      'Refrigerate overnight',
      'Top with fresh berries and almonds before serving'
    ],
    tags: ['breakfast', 'healthy', 'meal-prep', 'vegetarian']
  },
  {
    id: 'breakfast-burrito',
    title: 'Loaded Breakfast Burrito',
    description: 'Hearty breakfast burrito with eggs, cheese, and fresh vegetables',
    category: 'breakfast',
    image: '/images/recipes/breakfast-burrito.jpg',
    prepTime: '15 mins',
    cookTime: '10 mins',
    servings: 2,
    difficulty: 'Medium',
    ingredients: [
      '4 large eggs',
      '2 large flour tortillas',
      '1/2 cup shredded cheese',
      '1/2 cup black beans',
      'Diced tomatoes',
      'Diced onions',
      'Sliced avocado',
      'Hot sauce'
    ],
    instructions: [
      'Scramble eggs until just set',
      'Warm tortillas slightly',
      'Layer eggs, beans, and vegetables',
      'Add cheese and avocado',
      'Roll up tightly',
      'Toast in a pan until golden'
    ],
    tags: ['breakfast', 'protein', 'mexican-inspired']
  },
  {
    id: 'french-toast',
    title: 'Classic French Toast',
    description: 'Golden brown French toast dusted with powdered sugar and cinnamon',
    category: 'breakfast',
    image: '/images/recipes/french-toast.jpg',
    prepTime: '10 mins',
    cookTime: '15 mins',
    servings: 4,
    difficulty: 'Easy',
    ingredients: [
      '8 thick slices brioche bread',
      '4 large eggs',
      '1 cup milk',
      '1 teaspoon vanilla extract',
      '1/2 teaspoon cinnamon',
      'Butter for cooking',
      'Maple syrup',
      'Powdered sugar'
    ],
    instructions: [
      'Whisk eggs, milk, vanilla, and cinnamon',
      'Dip bread slices in mixture',
      'Cook in buttered pan until golden',
      'Dust with powdered sugar',
      'Serve with maple syrup'
    ],
    tags: ['breakfast', 'sweet', 'classic', 'vegetarian']
  },

  // Main Course Recipes
  {
    id: 'grilled-salmon',
    title: 'Grilled Salmon with Lemon Herb Butter',
    description: 'Perfectly grilled salmon fillets with a zesty lemon herb butter sauce',
    category: 'main-course',
    image: '/images/recipes/grilled-salmon.jpg',
    prepTime: '15 mins',
    cookTime: '20 mins',
    servings: 4,
    difficulty: 'Medium',
    ingredients: [
      '4 salmon fillets (6 oz each)',
      '4 tablespoons butter, softened',
      '2 lemons',
      '4 cloves garlic, minced',
      '2 tablespoons fresh herbs (dill, parsley, chives)',
      '2 tablespoons olive oil',
      'Salt and black pepper to taste'
    ],
    instructions: [
      'Mix softened butter with minced garlic, chopped herbs, lemon zest, and seasoning',
      'Pat salmon dry and brush with olive oil',
      'Season salmon with salt and pepper',
      'Preheat grill to medium-high heat',
      'Grill salmon for 4-5 minutes per side',
      'Top with herb butter and serve with lemon wedges'
    ],
    tags: ['main-course', 'seafood', 'healthy', 'gluten-free']
  },
  {
    id: 'beef-stir-fry',
    title: 'Asian Beef Stir Fry',
    description: 'Quick and flavorful beef stir fry with colorful vegetables in a savory sauce',
    category: 'main-course',
    image: '/images/recipes/beef-stir-fry.jpg',
    prepTime: '20 mins',
    cookTime: '15 mins',
    servings: 4,
    difficulty: 'Medium',
    ingredients: [
      '1 lb beef sirloin, thinly sliced',
      '2 cups mixed vegetables (broccoli, carrots, snap peas)',
      '3 cloves garlic, minced',
      '1 inch ginger, grated',
      '1/4 cup soy sauce',
      '2 tablespoons oyster sauce',
      '1 tablespoon cornstarch',
      '2 tablespoons vegetable oil'
    ],
    instructions: [
      'Marinate beef in soy sauce, ginger, and garlic for 15 minutes',
      'Mix cornstarch with 2 tablespoons water to make a slurry',
      'Heat oil in a wok over high heat',
      'Stir-fry beef until browned, remove from wok',
      'Stir-fry vegetables until crisp-tender',
      'Return beef to wok, add sauces and cornstarch slurry',
      'Cook until sauce thickens'
    ],
    tags: ['main-course', 'asian', 'beef', 'stir-fry']
  },
  {
    id: 'chicken-parmesan',
    title: 'Classic Chicken Parmesan',
    description: 'Crispy breaded chicken topped with marinara and melted mozzarella',
    category: 'main-course',
    image: '/images/recipes/chicken-parmesan.jpg',
    prepTime: '25 mins',
    cookTime: '30 mins',
    servings: 4,
    difficulty: 'Medium',
    ingredients: [
      '4 chicken breasts, pounded thin',
      '2 cups Italian breadcrumbs',
      '2 eggs, beaten',
      '1 cup flour',
      '2 cups marinara sauce',
      '2 cups mozzarella cheese',
      '1/2 cup grated parmesan',
      'Fresh basil for garnish'
    ],
    instructions: [
      'Set up breading station with flour, eggs, and breadcrumbs',
      'Dredge chicken in flour, then egg, then breadcrumbs',
      'Heat oil in a large skillet over medium heat',
      'Cook chicken until golden brown, about 4-5 minutes per side',
      'Top with marinara sauce and cheeses',
      'Broil until cheese is melted and bubbly',
      'Garnish with fresh basil'
    ],
    tags: ['main-course', 'italian', 'chicken', 'comfort-food']
  },
  {
    id: 'vegetable-curry',
    title: 'Coconut Vegetable Curry',
    description: 'Rich and creamy coconut curry loaded with fresh vegetables',
    category: 'main-course',
    image: '/images/recipes/vegetable-curry.jpg',
    prepTime: '20 mins',
    cookTime: '30 mins',
    servings: 4,
    difficulty: 'Easy',
    ingredients: [
      '2 cans coconut milk',
      '3 tablespoons curry paste',
      'Mixed vegetables (cauliflower, carrots, peas, potatoes)',
      '1 onion, diced',
      '3 cloves garlic, minced',
      '1 inch ginger, grated',
      'Fresh cilantro',
      'Cooked rice for serving'
    ],
    instructions: [
      'Sauté onion, garlic, and ginger until fragrant',
      'Add curry paste and cook for 1-2 minutes',
      'Add coconut milk and bring to a simmer',
      'Add vegetables and cook until tender',
      'Season with salt to taste',
      'Serve over rice with fresh cilantro'
    ],
    tags: ['main-course', 'vegetarian', 'curry', 'gluten-free']
  },
  {
    id: 'pasta-carbonara',
    title: 'Authentic Pasta Carbonara',
    description: 'Classic Roman pasta with crispy pancetta and creamy egg sauce',
    category: 'main-course',
    image: '/images/recipes/pasta-carbonara.jpg',
    prepTime: '15 mins',
    cookTime: '20 mins',
    servings: 4,
    difficulty: 'Medium',
    ingredients: [
      '1 lb spaghetti',
      '8 oz pancetta or guanciale, diced',
      '4 large eggs',
      '1 cup freshly grated Pecorino Romano',
      '1 cup freshly grated Parmigiano Reggiano',
      'Fresh black pepper',
      'Salt for pasta water'
    ],
    instructions: [
      'Bring a large pot of salted water to boil',
      'Cook pasta until al dente',
      'While pasta cooks, crisp pancetta in a large pan',
      'Whisk eggs and cheese in a bowl',
      'Reserve 1 cup pasta water before draining',
      'Toss hot pasta with pancetta',
      'Off heat, quickly stir in egg mixture',
      'Add pasta water as needed for creamy sauce'
    ],
    tags: ['main-course', 'italian', 'pasta', 'traditional']
  },

  // Dessert Recipes
  {
    id: 'chocolate-lava-cake',
    title: 'Chocolate Lava Cake',
    description: 'Rich, gooey chocolate cake with a molten center, served with vanilla ice cream',
    category: 'dessert',
    image: '/images/recipes/lava-cake.jpg',
    prepTime: '15 mins',
    cookTime: '12 mins',
    servings: 4,
    difficulty: 'Medium',
    ingredients: [
      '8 oz dark chocolate, chopped',
      '1/2 cup unsalted butter',
      '4 large eggs',
      '1/2 cup granulated sugar',
      '1/4 cup all-purpose flour',
      '1 teaspoon vanilla extract',
      'Pinch of salt',
      'Powdered sugar for dusting',
      'Vanilla ice cream for serving'
    ],
    instructions: [
      'Preheat oven to 425°F (220°C) and butter four 6-oz ramekins',
      'Melt chocolate and butter together in a double boiler until smooth',
      'Whisk eggs, sugar, and vanilla in a separate bowl until light and fluffy',
      'Fold chocolate mixture into egg mixture until combined',
      'Gently fold in flour and salt until just mixed',
      'Pour batter into prepared ramekins',
      'Bake for 12 minutes until edges are set but center is still soft',
      'Let cool for 1 minute, then invert onto serving plates',
      'Dust with powdered sugar and serve immediately with ice cream'
    ],
    tags: ['dessert', 'chocolate', 'baking', 'indulgent', 'hot dessert']
  },
  {
    id: 'fresh-fruit-tart',
    title: 'Fresh Fruit Tart',
    description: 'Buttery pastry shell filled with rich vanilla custard and topped with glazed fresh fruits',
    category: 'dessert',
    image: '/images/recipes/fruit-tart.jpg',
    prepTime: '45 mins',
    cookTime: '25 mins',
    servings: 8,
    difficulty: 'Hard',
    ingredients: [
      'For the tart shell:',
      '1 1/2 cups all-purpose flour',
      '1/2 cup powdered sugar',
      '1/2 cup cold butter, cubed',
      '1 large egg yolk',
      '2-3 tablespoons cold water',
      'For the pastry cream:',
      '2 cups whole milk',
      '1 vanilla bean, split',
      '4 egg yolks',
      '2/3 cup sugar',
      '1/4 cup cornstarch',
      'For topping:',
      'Assorted fresh fruits (berries, kiwi, peaches)',
      '1/4 cup apricot jam for glaze'
    ],
    instructions: [
      'Make the tart shell by pulsing flour, sugar, and butter until crumbly',
      'Add egg yolk and water until dough forms',
      'Chill dough for 30 minutes',
      'Roll out dough and fit into tart pan, then blind bake until golden',
      'For pastry cream, heat milk with vanilla bean until simmering',
      'Whisk egg yolks, sugar, and cornstarch separately',
      'Temper hot milk into egg mixture, then cook until thickened',
      'Cool pastry cream completely',
      'Fill cooled tart shell with pastry cream',
      'Arrange fresh fruits on top',
      'Brush with warmed apricot glaze'
    ],
    tags: ['dessert', 'fruits', 'baking', 'elegant', 'french']
  },
  {
    id: 'classic-tiramisu',
    title: 'Classic Italian Tiramisu',
    description: 'Traditional Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cream',
    category: 'dessert',
    image: '/images/recipes/tiramisu.jpg',
    prepTime: '30 mins',
    cookTime: '0 mins',
    servings: 8,
    difficulty: 'Medium',
    ingredients: [
      '24 Italian ladyfingers (Savoiardi)',
      '16 oz mascarpone cheese, room temperature',
      '4 large eggs, separated',
      '1/2 cup granulated sugar',
      '1 cup strong brewed espresso, cooled',
      '2 tablespoons dark rum (optional)',
      '1/4 cup unsweetened cocoa powder',
      'Dark chocolate shavings for garnish'
    ],
    instructions: [
      'Mix espresso with rum (if using) in a shallow dish',
      'Beat egg yolks and sugar until pale and creamy',
      'Add mascarpone to egg mixture and beat until smooth',
      'In a separate bowl, whip egg whites until stiff peaks form',
      'Gently fold egg whites into mascarpone mixture',
      'Quickly dip ladyfingers in coffee mixture and layer in dish',
      'Spread half the mascarpone mixture over ladyfingers',
      'Repeat layers with remaining ingredients',
      'Dust top generously with cocoa powder',
      'Refrigerate for at least 4 hours or overnight',
      'Garnish with chocolate shavings before serving'
    ],
    tags: ['dessert', 'italian', 'no-bake', 'coffee', 'make-ahead']
  },
  {
    id: 'classic-apple-pie',
    title: 'Classic Apple Pie',
    description: 'Traditional American apple pie with a flaky crust and spiced apple filling',
    category: 'dessert',
    image: '/images/recipes/apple-pie.jpg',
    prepTime: '45 mins',
    cookTime: '50 mins',
    servings: 8,
    difficulty: 'Medium',
    ingredients: [
      'For the crust:',
      '2 1/2 cups all-purpose flour',
      '1 cup cold butter, cubed',
      '1/4 cup ice water',
      '1 teaspoon salt',
      'For the filling:',
      '6 cups sliced apples (mix of Granny Smith and Honeycrisp)',
      '3/4 cup granulated sugar',
      '2 tablespoons lemon juice',
      '1 teaspoon ground cinnamon',
      '1/4 teaspoon ground nutmeg',
      '1/4 teaspoon ground allspice',
      '3 tablespoons cornstarch',
      '1 egg (for egg wash)',
      'Coarse sugar for sprinkling'
    ],
    instructions: [
      'Make pie dough by cutting butter into flour and salt',
      'Add ice water gradually until dough forms',
      'Divide dough in half, chill for 1 hour',
      'Mix sliced apples with sugar, spices, lemon juice, and cornstarch',
      'Roll out bottom crust and fit into pie dish',
      'Fill with apple mixture',
      'Roll out top crust and cover pie, crimp edges',
      'Cut slits in top crust for venting',
      'Brush with egg wash and sprinkle with coarse sugar',
      'Bake at 425°F for 45-50 minutes until golden brown',
      'Cool completely before serving'
    ],
    tags: ['dessert', 'american', 'baking', 'classic', 'fruit pie']
  },
  {
    id: 'vanilla-cheesecake',
    title: 'New York Style Vanilla Cheesecake',
    description: 'Rich and creamy classic New York cheesecake with a graham cracker crust',
    category: 'dessert',
    image: '/images/recipes/vanilla-cheesecake.jpg',
    prepTime: '30 mins',
    cookTime: '1 hour',
    servings: 12,
    difficulty: 'Medium',
    ingredients: [
      'For the crust:',
      '2 cups graham cracker crumbs',
      '1/2 cup melted butter',
      '1/4 cup sugar',
      'For the filling:',
      '32 oz cream cheese, softened',
      '1 cup granulated sugar',
      '4 large eggs',
      '1/3 cup heavy cream',
      '2 teaspoons vanilla extract',
      '1/4 teaspoon salt',
      'For topping:',
      'Fresh berries',
      'Whipped cream'
    ],
    instructions: [
      'Preheat oven to 325°F',
      'Mix graham cracker crumbs, melted butter, and sugar',
      'Press mixture into springform pan and bake for 10 minutes',
      'Beat cream cheese until smooth',
      'Gradually add sugar, then eggs one at a time',
      'Mix in heavy cream, vanilla, and salt',
      'Pour over crust and smooth top',
      'Bake for 1 hour until center is almost set',
      'Turn off oven and let cool inside for 1 hour',
      'Refrigerate for at least 4 hours',
      'Serve with fresh berries and whipped cream'
    ],
    tags: ['dessert', 'cheesecake', 'american', 'baking', 'classic']
  },

  // Vegetarian Recipes
  {
    id: 'mushroom-risotto',
    title: 'Creamy Mushroom Risotto',
    description: 'Rich and creamy Italian risotto with mixed wild mushrooms and Parmesan',
    category: 'vegetarian',
    image: '/images/recipes/mushroom-risotto.jpg',
    prepTime: '15 mins',
    cookTime: '35 mins',
    servings: 4,
    difficulty: 'Medium',
    ingredients: [
      '1 1/2 cups Arborio rice',
      '6 cups vegetable stock, kept warm',
      '1 lb mixed mushrooms (portobello, shiitake, porcini)',
      '1 medium onion, finely diced',
      '4 cloves garlic, minced',
      '1/2 cup dry white wine',
      '1/2 cup freshly grated Parmesan cheese',
      '2 tablespoons butter',
      '2 tablespoons olive oil',
      'Fresh thyme leaves',
      'Salt and black pepper to taste'
    ],
    instructions: [
      'Clean and slice mushrooms, reserving a few for garnish',
      'Heat stock in a separate pot and keep warm',
      'Sauté mushrooms in butter until golden, set aside',
      'In the same pan, cook onion and garlic in olive oil until soft',
      'Add rice and toast for 2-3 minutes until translucent',
      'Add wine and stir until absorbed',
      'Add hot stock one ladle at a time, stirring constantly',
      'Continue adding stock until rice is creamy and al dente',
      'Stir in cooked mushrooms and Parmesan',
      'Finish with butter and fresh thyme',
      'Season to taste and serve immediately'
    ],
    tags: ['vegetarian', 'italian', 'risotto', 'comfort-food', 'mushrooms']
  },
  {
    id: 'quinoa-buddha-bowl',
    title: 'Rainbow Quinoa Buddha Bowl',
    description: 'Nourishing bowl of quinoa, roasted vegetables, and tahini dressing',
    category: 'vegetarian',
    image: '/images/recipes/buddha-bowl.jpg',
    prepTime: '20 mins',
    cookTime: '25 mins',
    servings: 4,
    difficulty: 'Easy',
    ingredients: [
      '1 cup quinoa, rinsed',
      '1 can chickpeas, drained and rinsed',
      '2 sweet potatoes, cubed',
      '2 cups broccoli florets',
      '1 red bell pepper, sliced',
      '1 cup cherry tomatoes',
      '2 cups baby spinach',
      'For the dressing:',
      '1/4 cup tahini',
      '2 tablespoons lemon juice',
      '1 tablespoon maple syrup',
      '2 cloves garlic, minced',
      'Warm water to thin',
      'For garnish:',
      'Sliced avocado',
      'Mixed seeds (pumpkin, sunflower)',
      'Fresh herbs (cilantro, parsley)'
    ],
    instructions: [
      'Cook quinoa according to package instructions',
      'Preheat oven to 400°F (200°C)',
      'Toss sweet potatoes and broccoli with olive oil and seasonings',
      'Roast vegetables for 20-25 minutes until tender',
      'Season and roast chickpeas until crispy',
      'Whisk together tahini dressing ingredients',
      'Assemble bowls with quinoa, roasted vegetables, and fresh ingredients',
      'Drizzle with tahini dressing',
      'Top with seeds and fresh herbs'
    ],
    tags: ['vegetarian', 'healthy', 'bowl', 'meal-prep', 'gluten-free']
  },
  {
    id: 'spinach-cannelloni',
    title: 'Spinach and Ricotta Cannelloni',
    description: 'Tender pasta tubes filled with creamy spinach and ricotta, baked in tomato sauce',
    category: 'vegetarian',
    image: '/images/recipes/cannelloni.jpg',
    prepTime: '40 mins',
    cookTime: '35 mins',
    servings: 6,
    difficulty: 'Medium',
    ingredients: [
      '12 fresh pasta sheets or cannelloni tubes',
      '2 lbs fresh spinach, wilted and chopped',
      '15 oz ricotta cheese',
      '1 cup grated Parmesan cheese',
      '2 large eggs',
      '2 cloves garlic, minced',
      'Nutmeg to taste',
      'For the sauce:',
      '28 oz crushed tomatoes',
      '2 cloves garlic, minced',
      '1 tablespoon olive oil',
      'Fresh basil leaves',
      '1 cup mozzarella cheese for topping',
      'Salt and pepper to taste'
    ],
    instructions: [
      'Mix spinach, ricotta, half the Parmesan, eggs, garlic, and nutmeg',
      'Prepare tomato sauce with garlic, olive oil, and basil',
      'Fill pasta sheets/tubes with spinach mixture',
      'Spread some sauce in baking dish',
      'Arrange filled cannelloni in dish',
      'Cover with remaining sauce',
      'Top with mozzarella and remaining Parmesan',
      'Bake at 375°F for 30-35 minutes until bubbly',
      'Let rest for 5 minutes before serving'
    ],
    tags: ['vegetarian', 'italian', 'pasta', 'comfort-food', 'baked']
  },
  {
    id: 'thai-green-curry',
    title: 'Thai Green Curry with Vegetables',
    description: 'Fragrant Thai green curry with coconut milk and crisp vegetables',
    category: 'vegetarian',
    image: '/images/recipes/green-curry.jpg',
    prepTime: '25 mins',
    cookTime: '30 mins',
    servings: 4,
    difficulty: 'Medium',
    ingredients: [
      '2 cans coconut milk',
      '4 tablespoons green curry paste',
      '2 cups mixed vegetables (baby corn, snow peas, bell peppers)',
      '1 block firm tofu, cubed',
      '2 kaffir lime leaves',
      '1 tablespoon palm sugar or brown sugar',
      '2 tablespoons soy sauce',
      'Fresh Thai basil leaves',
      'Fresh lime juice',
      'Jasmine rice for serving'
    ],
    instructions: [
      'Press tofu to remove excess moisture, then cube',
      'Heat coconut cream (top of coconut milk) in a wok',
      'Fry curry paste until fragrant',
      'Add remaining coconut milk and lime leaves',
      'Add palm sugar and soy sauce',
      'Add firmer vegetables first, then softer ones',
      'Add tofu and simmer gently',
      'Finish with Thai basil and lime juice',
      'Serve hot with jasmine rice'
    ],
    tags: ['vegetarian', 'thai', 'curry', 'spicy', 'asian']
  },
  {
    id: 'vegetable-lasagna',
    title: 'Roasted Vegetable Lasagna',
    description: 'Layers of pasta, roasted vegetables, and three cheeses in a rich tomato sauce',
    category: 'vegetarian',
    image: '/images/recipes/vegetable-lasagna.jpg',
    prepTime: '45 mins',
    cookTime: '50 mins',
    servings: 8,
    difficulty: 'Medium',
    ingredients: [
      'Lasagna noodles',
      '2 zucchini, sliced',
      '2 eggplants, sliced',
      '2 bell peppers, sliced',
      '1 lb mushrooms, sliced',
      'For the sauce:',
      '28 oz crushed tomatoes',
      '3 cloves garlic, minced',
      '1 onion, diced',
      'Fresh basil and oregano',
      'For the cheese mixture:',
      '15 oz ricotta cheese',
      '2 cups mozzarella cheese',
      '1 cup Parmesan cheese',
      '2 eggs',
      'Fresh parsley'
    ],
    instructions: [
      'Roast vegetables with olive oil and seasonings',
      'Prepare tomato sauce with garlic, onion, and herbs',
      'Mix ricotta, eggs, and herbs',
      'Layer: sauce, noodles, vegetables, cheese mixture',
      'Repeat layers ending with sauce and mozzarella',
      'Cover with foil and bake at 375°F for 40 minutes',
      'Uncover and bake 10 more minutes until golden',
      'Let rest for 15 minutes before serving'
    ],
    tags: ['vegetarian', 'italian', 'pasta', 'comfort-food', 'baked']
  },

  // Step-by-Step Recipes
  {
    id: 'homemade-pizza',
    title: 'Homemade Pizza from Scratch',
    description: 'Learn to make restaurant-quality pizza at home with detailed step-by-step instructions',
    category: 'step-by-step',
    image: '/images/recipes/homemade-pizza.jpg',
    prepTime: '2 hours',
    cookTime: '15 mins',
    servings: 4,
    difficulty: 'Medium',
    ingredients: [
      'For the dough:',
      '3 cups all-purpose flour',
      '1 tsp instant yeast',
      '1 tsp salt',
      '1 tbsp olive oil',
      'Warm water',
      'For the topping:',
      'Pizza sauce',
      'Mozzarella cheese',
      'Your choice of toppings'
    ],
    instructions: [
      'Mix flour, yeast, and salt in a bowl',
      'Add olive oil and warm water gradually',
      'Knead until smooth and elastic',
      'Let rise for 1 hour',
      'Shape into pizza base',
      'Add toppings',
      'Bake at 450°F for 12-15 minutes'
    ],
    tags: ['pizza', 'italian', 'baking']
  },
  {
    id: 'sushi-rolls',
    title: 'Basic Sushi Rolls',
    description: 'Master the art of sushi rolling with this detailed guide',
    category: 'step-by-step',
    image: '/images/recipes/sushi-rolls.jpg',
    prepTime: '45 mins',
    cookTime: '30 mins',
    servings: 4,
    difficulty: 'Hard',
    ingredients: [
      '2 cups sushi rice',
      'Nori sheets',
      'Rice vinegar',
      'Sugar',
      'Salt',
      'Fillings of choice'
    ],
    instructions: [
      'Cook sushi rice',
      'Season with vinegar mixture',
      'Place nori on bamboo mat',
      'Spread rice on nori',
      'Add fillings',
      'Roll tightly',
      'Cut into pieces'
    ],
    tags: ['japanese', 'sushi', 'seafood']
  },

  // Quick & Easy Recipes
  {
    id: '15-min-pasta',
    title: '15-Minute Garlic Pasta',
    description: 'Quick and delicious pasta perfect for busy weeknights',
    category: 'quick-and-easy',
    image: '/images/recipes/quick-pasta.jpg',
    prepTime: '5 mins',
    cookTime: '10 mins',
    servings: 2,
    difficulty: 'Easy',
    ingredients: [
      'Spaghetti',
      'Garlic',
      'Olive oil',
      'Red pepper flakes',
      'Parmesan cheese',
      'Fresh parsley'
    ],
    instructions: [
      'Boil pasta',
      'Sauté garlic in olive oil',
      'Add pepper flakes',
      'Toss with pasta',
      'Top with cheese and parsley'
    ],
    tags: ['pasta', 'quick', 'vegetarian']
  },
  {
    id: 'quick-stir-fry',
    title: '10-Minute Vegetable Stir Fry',
    description: 'Healthy and quick stir-fry with your choice of vegetables',
    category: 'quick-and-easy',
    image: '/images/recipes/stir-fry.jpg',
    prepTime: '5 mins',
    cookTime: '5 mins',
    servings: 2,
    difficulty: 'Easy',
    ingredients: [
      'Mixed vegetables',
      'Soy sauce',
      'Garlic',
      'Ginger',
      'Oil',
      'Sesame seeds'
    ],
    instructions: [
      'Heat oil in wok',
      'Add garlic and ginger',
      'Stir-fry vegetables',
      'Add soy sauce',
      'Garnish with sesame seeds'
    ],
    tags: ['stir-fry', 'quick', 'vegetarian']
  },

  // Healthy & Diet-Specific
  {
    id: 'keto-salmon',
    title: 'Keto Baked Salmon',
    description: 'Low-carb salmon with herbs and lemon',
    category: 'dietary',
    image: '/images/recipes/keto-salmon.jpg',
    prepTime: '10 mins',
    cookTime: '20 mins',
    servings: 2,
    difficulty: 'Easy',
    ingredients: [
      'Salmon fillets',
      'Butter',
      'Lemon',
      'Fresh herbs',
      'Garlic',
      'Salt and pepper'
    ],
    instructions: [
      'Preheat oven',
      'Season salmon',
      'Add butter and lemon',
      'Bake until done',
      'Garnish with herbs'
    ],
    tags: ['keto', 'seafood', 'healthy']
  },
  {
    id: 'vegan-curry',
    title: 'Vegan Chickpea Curry',
    description: 'Hearty and flavorful vegan curry',
    category: 'dietary',
    image: '/images/recipes/vegan-curry.jpg',
    prepTime: '15 mins',
    cookTime: '30 mins',
    servings: 4,
    difficulty: 'Medium',
    ingredients: [
      'Chickpeas',
      'Coconut milk',
      'Tomatoes',
      'Onion',
      'Spices',
      'Rice for serving'
    ],
    instructions: [
      'Sauté onions',
      'Add spices',
      'Add chickpeas and tomatoes',
      'Simmer with coconut milk',
      'Serve with rice'
    ],
    tags: ['vegan', 'curry', 'gluten-free']
  },

  // Seasonal & Festive
  {
    id: 'christmas-pudding',
    title: 'Traditional Christmas Pudding',
    description: 'Classic British Christmas dessert',
    category: 'seasonal',
    image: '/images/recipes/christmas-pudding.jpg',
    prepTime: '30 mins',
    cookTime: '4 hours',
    servings: 8,
    difficulty: 'Hard',
    ingredients: [
      'Dried fruits',
      'Brandy',
      'Flour',
      'Breadcrumbs',
      'Spices',
      'Eggs'
    ],
    instructions: [
      'Soak fruits in brandy',
      'Mix dry ingredients',
      'Combine with eggs',
      'Steam for 4 hours',
      'Serve with custard'
    ],
    tags: ['christmas', 'dessert', 'traditional']
  },
  {
    id: 'thanksgiving-turkey',
    title: 'Roast Turkey with Herbs',
    description: 'Perfect centerpiece for Thanksgiving dinner',
    category: 'seasonal',
    image: '/images/recipes/roast-turkey.jpg',
    prepTime: '1 hour',
    cookTime: '4 hours',
    servings: 10,
    difficulty: 'Hard',
    ingredients: [
      'Whole turkey',
      'Butter',
      'Fresh herbs',
      'Garlic',
      'Lemon',
      'Salt and pepper'
    ],
    instructions: [
      'Prepare turkey',
      'Make herb butter',
      'Season cavity',
      'Roast until done',
      'Rest before carving'
    ],
    tags: ['thanksgiving', 'turkey', 'holiday']
  },

  // International Cuisine
  {
    id: 'pad-thai',
    title: 'Authentic Pad Thai',
    description: 'Classic Thai stir-fried noodles',
    category: 'international',
    image: '/images/recipes/pad-thai.jpg',
    prepTime: '20 mins',
    cookTime: '15 mins',
    servings: 4,
    difficulty: 'Medium',
    ingredients: [
      'Rice noodles',
      'Tofu',
      'Bean sprouts',
      'Eggs',
      'Pad Thai sauce',
      'Peanuts'
    ],
    instructions: [
      'Soak noodles',
      'Prepare sauce',
      'Stir-fry ingredients',
      'Add noodles',
      'Garnish and serve'
    ],
    tags: ['thai', 'noodles', 'stir-fry']
  },
  {
    id: 'butter-chicken',
    title: 'Indian Butter Chicken',
    description: 'Rich and creamy Indian curry',
    category: 'international',
    image: '/images/recipes/butter-chicken.jpg',
    prepTime: '30 mins',
    cookTime: '45 mins',
    servings: 6,
    difficulty: 'Medium',
    ingredients: [
      'Chicken',
      'Yogurt',
      'Tomatoes',
      'Cream',
      'Spices',
      'Butter'
    ],
    instructions: [
      'Marinate chicken',
      'Make tomato gravy',
      'Cook chicken',
      'Add cream',
      'Finish with butter'
    ],
    tags: ['indian', 'curry', 'chicken']
  },

  // Restaurant-Style
  {
    id: 'restaurant-pasta',
    title: 'Restaurant-Style Fettuccine Alfredo',
    description: 'Creamy pasta just like at your favorite Italian restaurant',
    category: 'restaurant-style',
    image: '/images/recipes/alfredo.jpg',
    prepTime: '15 mins',
    cookTime: '20 mins',
    servings: 4,
    difficulty: 'Medium',
    ingredients: [
      'Fettuccine',
      'Heavy cream',
      'Parmesan cheese',
      'Butter',
      'Garlic',
      'Black pepper'
    ],
    instructions: [
      'Cook pasta',
      'Make cream sauce',
      'Add cheese',
      'Toss with pasta',
      'Serve immediately'
    ],
    tags: ['pasta', 'italian', 'creamy']
  },
  {
    id: 'restaurant-burger',
    title: 'Gourmet Restaurant Burger',
    description: 'Steakhouse-quality burger at home',
    category: 'restaurant-style',
    image: '/images/recipes/gourmet-burger.jpg',
    prepTime: '20 mins',
    cookTime: '10 mins',
    servings: 4,
    difficulty: 'Medium',
    ingredients: [
      'Ground beef',
      'Brioche buns',
      'Special sauce',
      'Cheese',
      'Lettuce',
      'Tomato'
    ],
    instructions: [
      'Form patties',
      'Season well',
      'Grill to preference',
      'Toast buns',
      'Assemble burger'
    ],
    tags: ['burger', 'beef', 'gourmet']
  },

  // Budget-Friendly
  {
    id: 'lentil-soup',
    title: 'Hearty Lentil Soup',
    description: 'Nutritious and economical soup',
    category: 'budget-friendly',
    image: '/images/recipes/lentil-soup.jpg',
    prepTime: '15 mins',
    cookTime: '45 mins',
    servings: 6,
    difficulty: 'Easy',
    ingredients: [
      'Lentils',
      'Vegetables',
      'Stock',
      'Onion',
      'Garlic',
      'Spices'
    ],
    instructions: [
      'Sauté vegetables',
      'Add lentils',
      'Add stock',
      'Simmer until done',
      'Season to taste'
    ],
    tags: ['soup', 'vegetarian', 'budget']
  },
  {
    id: 'rice-beans',
    title: 'Rice and Beans',
    description: 'Classic budget-friendly meal',
    category: 'budget-friendly',
    image: '/images/recipes/rice-beans.jpg',
    prepTime: '10 mins',
    cookTime: '30 mins',
    servings: 4,
    difficulty: 'Easy',
    ingredients: [
      'Rice',
      'Black beans',
      'Onion',
      'Garlic',
      'Spices',
      'Cilantro'
    ],
    instructions: [
      'Cook rice',
      'Prepare beans',
      'Season well',
      'Combine',
      'Garnish with cilantro'
    ],
    tags: ['vegetarian', 'budget', 'protein']
  }
];

export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
  icon: string;
  subcategories: string[];
}

export const categories: Category[] = [
  {
    id: 'step-by-step',
    name: 'Step-by-Step Recipes',
    description: 'Detailed visual guides for foolproof cooking',
    image: '/images/categories/step-by-step.jpg',
    icon: '📝',
    subcategories: [
      'Beginner Friendly',
      'Video Guides',
      'Photo Tutorials',
      'Basic Techniques'
    ]
  },
  {
    id: 'quick-and-easy',
    name: 'Quick & Easy',
    description: '30-minute meals for busy schedules',
    image: '/images/categories/quick-easy.jpg',
    icon: '⚡',
    subcategories: [
      '5-Ingredient Recipes',
      'One-Pot Meals',
      'Under 30 Minutes',
      'Make-Ahead'
    ]
  },
  {
    id: 'dietary',
    name: 'Healthy & Diet-Specific',
    description: 'Recipes for every dietary preference',
    image: '/images/categories/dietary.jpg',
    icon: '🥗',
    subcategories: [
      'Keto',
      'Vegan',
      'Gluten-Free',
      'Low-Carb',
      'Paleo',
      'Mediterranean'
    ]
  },
  {
    id: 'seasonal',
    name: 'Seasonal & Festive',
    description: 'Special occasion and holiday recipes',
    image: '/images/categories/seasonal.jpg',
    icon: '🎉',
    subcategories: [
      'Christmas',
      'Thanksgiving',
      'Easter',
      'Summer BBQ',
      'Halloween',
      'Diwali'
    ]
  },
  {
    id: 'international',
    name: 'International Cuisine',
    description: 'Explore dishes from around the world',
    image: '/images/categories/international.jpg',
    icon: '🌎',
    subcategories: [
      'Italian',
      'Mexican',
      'Chinese',
      'Indian',
      'Japanese',
      'Mediterranean',
      'Thai'
    ]
  },
  {
    id: 'restaurant-style',
    name: 'Restaurant-Style',
    description: 'Recreate your favorite restaurant dishes',
    image: '/images/categories/restaurant.jpg',
    icon: '🍽️',
    subcategories: [
      'Copycat Recipes',
      'Fine Dining',
      'Fast Food Favorites',
      'Food Truck Style'
    ]
  },
  {
    id: 'budget-friendly',
    name: 'Budget-Friendly',
    description: 'Delicious meals that won\'t break the bank',
    image: '/images/categories/budget.jpg',
    icon: '💰',
    subcategories: [
      'Under $10 Meals',
      'Bulk Cooking',
      'Pantry Recipes',
      'Student Meals'
    ]
  }
]; 