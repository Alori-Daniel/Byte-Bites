// const fetchBurgerImage = async () => {
//   try {
//     const response = await fetch("https://foodish-api.com/api/images/burger");
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.error("Error fetching the burger image:", error);
//   }
// };

// fetchBurgerImage();
import chicken from "@/assets/images/burger/Image.png";
import Beef from "@/assets/images/burger/Image1.png";

import Turkey from "@/assets/images/burger/Image2.png";

import Fish from "@/assets/images/burger/Image3.png";

export const foodItems = [
  { name: "Burger", icon: "🍔" },
  { name: "Taco", icon: "🌮" },
  { name: "Burrito", icon: "🌯" },
  { name: "Drink", icon: "🥤" },
  { name: "Pizza", icon: "🍕" },
  { name: "Donut", icon: "🍩" },
  { name: "Salad", icon: "🥗" },
  { name: "Noodles", icon: "🍜" },
  { name: "Sandwich", icon: "🌮" },
  { name: "Pasta", icon: "🍝" },
  { name: "Ice Cream", icon: "🍨" },
  { name: "More", icon: "⋯" },
  //   { name: "Takoyaki", icon: "🍡" },
  //   { name: "Fruit", icon: "🍉" },
  //   { name: "Sausage", icon: "🌭" },
  //   { name: "Goi Cuon", icon: "🍤" },
  //   { name: "Cookie", icon: "🍪" },
  //   { name: "Pudding", icon: "🍮" },
  //   { name: "Banh Mi", icon: "🥪" },
  //   { name: "Dumpling", icon: "🥟" },
];

export const specialOffer = [
  {
    name: "Chicken Burger",
    rating: 4.9,
    price: 10,
    discount: 6,
    image: chicken,
  },
  {
    name: "Beef Burger",
    rating: 4.9,
    price: 10,
    discount: 6,
    image: Beef,
  },
  {
    name: "Turkey Burger",
    rating: 4.9,
    price: 10,
    discount: 6,
    image: Turkey,
  },
  {
    name: "Fish Burger",
    rating: 4.9,
    price: 10,
    discount: 6,
    image: Fish,
  },
];
