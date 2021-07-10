const searchInput = document.getElementById('search2');
const results = document.getElementById('results2');

let searchTerm = '';

var Recipes = [];
var first = {
    name: "Healthy Breakfast & Brunch Recipes",
    intro: "Breakfast is the most important meal of the day, so it's worth the effort to eat a healthy one! Get inspired to eat a good breakfast every day with this list of some of the best healthy breakfast recipes that pack in plenty of great flavors, along with good nutrition. From marvelous muffins, tarted up toast, and excellent eggy breakfasts to simple smoothies and overnight oats, try some (or all) of these breakfast recipes.",
    recipes1name: "Avocado and Poached Egg Toast :",
    recipes1: "Avocado toast is in the house! If there were a pageant for the most popular healthy breakfast, avocado toast might take the crown.The once niche food trend has now become a mainstream American favorite for breakfast and brunch.With just a few ingredients needed,this easy,healthy breakfast recipe includes oh - so - simple tips for poaching the perfect egg that is pleasing to look at and eat.",
    recipes2name: "Peanut Banana Cinnamon Smoothie :  ",
    recipes2: "Smoothies are an easy way to start the day and this peanut banana breakfast smoothie is no different. Kids and adults alike will cheer for the magical flavor combination of peanut butter and bananas. Just a little bit of cinnamon adds an unexpected burst of spice that brightens the whole drink.",
    recipes3name: "Overnight Chia Seed Oatmeal :",
    recipes3: "Overnight oats are the perfect breakfast if you want a wholesome, homemade morning meal, but you don't want to add anything extra to your morning routine.ngredients are combined in a container and left to chill overnight in the refrigerator. The oats become soft and creamy by morning, just like slow-cooked oatmeal. Chia seeds, popular for their omega-3s and other health benefits, add a light nutty flavor. Pair that with a little maple syrup, cinnamon, and vanilla to add some sweetness and you are good to go!"
}
Recipes.push(first)

var second = {
    name: "Healthy Lunch Recipes",
    intro: "Find healthy, delicious lunch recipes including wraps, vegan and vegetarian recipes, and kid-friendly lunches. Healthier Recipes, from the food and nutrition experts.",
    recipes1name: "Easy Pasta Salad:",
    recipes1: "Studded with feta cheese, chickpeas, herbs, and veggies, this easy pasta salad is fresh and fun to eat! Its zippy lemon dressing is tangy and delicious – I love it on green salads and roasted veggies, too.",
    recipes2name: "Many-Veggie Vegetable Soup:",
    recipes2: "Make this versatile vegetable soup with whatever veggies you have in the fridge. Try using butternut squash instead of sweet potato or adding spinach, bell peppers, or broccoli. No matter what, it’ll come out great.",
    recipes3name: "Grains",
    recipes3: "Cook a big batch of grains on the weekend, and add them to salads and bowls all week long! If I’m craving a lighter lunch, I’ll meal prep a veggie “grain,” like zucchini noodles or cauliflower rice, instead."
}
Recipes.push(second)

var third = {
    name: "Healthy Dinner Recipes",
    intro: "These healthy recipes shake up your comfort food favorites by adding more veggies and swapping out cooking methods—try out pan-fried tilapia next time you're craving fish sticks or our chicken parm stuffed peppers instead of the heavy pasta-filled dish.",
    recipes1name: "Herb & Garlic Mushroom Pasta :",
    recipes1: "This is one of my favorite recipes of all time. It’s such an easy vegetarian dinner recipe, whether you’re vegetarian or not. If you love mushrooms, you HAVE to make this pasta dish. Even though it seems very simple, it’s big on flavor because mushrooms and tarragon are a match made in heaven. A touch of cashew cream with Dijon mustard makes it just a little creamy and oh so luscious.",
    recipes2name: "Crispy Butternut Squash & Poblano Tacos :",
    recipes2: "Ok, if I had to pick TWO favorite recipes from 2017 this may be my second favorite. That butternut squash looks fried, but looks can be deceiving – it’s coated with crispy hemp seeds and panko and baked. The creamy poblano sauce takes these tacos over the top.",
    recipes3name: "Vegan “Cheesy” Broccoli Soup :",
    recipes3: "Based on how many times I’ve seen this one tagged on Instagram, I’m assuming that this creamy broccoli soup is a fan favorite. Traditional cheesy broccoli soup is so very unhealthy, but my version packs a ton of vegetables and is husband-approved."
}
Recipes.push(third)

var fourth = {
    name: "Healthy Salad Recipes :",
    intro: "Find healthy, delicious salad recipes including fruit salads, chicken, egg and potato salads, and healthy salad dressings.",
    recipes1name: "Healthy Salad Recipes :",
    recipes1: "Toasting the grain before it simmers isn’t essential, but it does add a pleasant nuttiness to the flavor of this vegan quinoa salad. Mix and match whatever fresh herbs and veggies you have on hand for this healthy salad recipe. —Taste of Home Test Kitchen, Milwaukee, Wisconsin",
    recipes2name: "Easy Seafood Salad :",
    recipes2: "This easy seafood salad was inspired by a dish I had in the Bahamas that featured conch. I substituted crab and shrimp and like it even more! —Cindy Heyd, Edmond, Oklahoma.",
    recipes3name: "Honey-Mustard Brussels Sprouts Salad :",
    recipes3: "Even if you dislike Brussels sprouts salad, you will love this dish. The dressing is truly tasty, and it pairs so nicely with the apples, grapes and walnuts. You can also add whatever cheese, nuts or fruit you prefer. —Sheila Sturrock, Coldwater, Ontario."
}
Recipes.push(fourth)






localStorage.setItem('Recipes', JSON.stringify(Recipes));

async function fetchrecipes() {

    Recipes = JSON.parse(localStorage.getItem('Recipes'));

};

async function showrecipes() {

    await fetchrecipes();

    console.log(Recipes)

    results2.innerHTML = (



        Recipes.filter(recipes => recipes.name.toLowerCase().includes(searchTerm.toLowerCase()))
        .map(recipes => (

            ` 
          <li class="book-item">

            <h3 class="book-name">${recipes.name}</h3>
            
          </li>
        `
        ))
    );
    console.log(results2);
};

showrecipes();

function getelement(e) {
    console.log(e.target);
    localStorage.setItem('choosen recipes', e.target.innerText)



}

searchInput.addEventListener('input', function(event) {
    searchTerm = event.target.value;
    showrecipes();
});