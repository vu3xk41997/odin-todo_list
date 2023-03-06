import { Todo } from "./todo";

const drinkWater = new Todo("Drink water", "Drink at least 2 liters of water.", "March 8th", "High", "General");

localStorage.setItem("Drink water", JSON.stringify(drinkWater));