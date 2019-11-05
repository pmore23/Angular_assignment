import { Item } from './item.entity';

export interface Order {
    id: string;
    item: Item;
    date: string;
}

