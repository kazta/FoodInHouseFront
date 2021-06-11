import { Food } from "../food/food";

export interface Item{
    food: Food;
    cant: number;
    observation: string;
}