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

export const transactionOrders = [
  {
    name: "SP 002526",
    rating: 4.9,
    price: 28,
    status: "Completed",
    image: chicken,
  },
  {
    name: "SP 002826",
    rating: 4.9,
    price: 25,
    status: "Completed",
    image: Beef,
  },
  {
    name: "SP 002426",
    rating: 4.9,
    price: 23,
    status: "Completed",
    image: Turkey,
  },
  {
    name: "SP 002326",
    rating: 4.9,
    price: 30,
    status: "Cancelled",
    image: Fish,
  },
];

interface Notification {
  id: string;
  title: string;
  description: string;
  time: string;
  icon: string;
  iconBg: string;
  iconColor: string;
  unread?: boolean;
}

export const notifications: Notification[] = [
  {
    id: "1",
    title: "Get 20% Discount Code",
    description: "Get discount codes from sharing with friends.",
    time: "12:20 10/05/2024",
    icon: "pricetag",
    iconBg: "#FFF4E6",
    iconColor: "#FFB800",
    unread: true,
  },
  {
    id: "2",
    title: "Get 10% Discount Code",
    description: "Holiday discount code.",
    time: "11:10 10/05/2024",
    icon: "pricetag",
    iconBg: "#FFF4E6",
    iconColor: "#FFB800",
    unread: true,
  },
  {
    id: "3",
    title: "Order Received",
    description: "Order #SP_0023900 has been delivered successfully.",
    time: "10:15 10/05/2024",
    icon: "checkmark-circle",
    iconBg: "#E6F7F5",
    iconColor: "#00D4AA",
  },
  {
    id: "4",
    title: "Order on the Way",
    description: "Your delivery driver is on the way with your order.",
    time: "10:10 10/05/2024",
    icon: "bicycle",
    iconBg: "#E6F7F5",
    iconColor: "#00D4AA",
  },
  {
    id: "5",
    title: "Your Order is Confirmed",
    description: "Your order #SP_0023900 has been confirmed.",
    time: "09:59 10/05/2024",
    icon: "receipt",
    iconBg: "#E6F7F5",
    iconColor: "#00D4AA",
  },
  {
    id: "6",
    title: "Order Successful",
    description: "Order #SP_0023900 has been placed successfully.",
    time: "09:56 10/05/2024",
    icon: "bag-handle",
    iconBg: "#E6F7F5",
    iconColor: "#00D4AA",
  },
];

export const profileData = [
  { name: "My Locations", icon: "location-outline" },
  { name: "My Promotions", icon: "gift-outline" },
  { name: "Payment Methods", icon: "card-outline" },
  { name: "Messages", icon: "chatbubble-outline" },
  { name: "Invite Friends", icon: "person-add-outline" },
  { name: "Security", icon: "shield-checkmark-outline" },
  { name: "Help Center", icon: "help-circle-outline" },
];
