import { CardType } from "./cart-type";

export interface Card {
    _id: string;
    number: string;
    name: string;
    surname: string;
    ownerId: string;
    owner: string;
    type: CardType;
    amount: number;
    csc: number;
}