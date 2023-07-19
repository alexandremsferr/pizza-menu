import { Pizza } from "./Pizza";
import pizzaData from "../data";

export function Menu() {
  return (
    <Pizza pizzas={pizzaData} />
  );
}