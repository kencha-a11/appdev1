let favoriteFoods = ["Spaghetti", "Ramen", "Bread"]

favoriteFoods.push("Milk")

favoriteFoods.shift()

for (let food of favoriteFoods) {
    console.log(food)
}

var likedFood = favoriteFoods.map(function (food) {
    return ("I like " + food)
})

console.log(likedFood)