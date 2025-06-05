export interface PizzaTypes {
  id: number;
  name: string;
  unitPrice: number;
  imageUrl: string;
  ingredients: string[];
  soldOut: boolean;
}

export interface CartItemTypes {
  pizzaId: number;
  name: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
}

export interface OrderType {
  id: string;
  status: string;
  priority: boolean;
  priorityPrice: number;
  orderPrice: number;
  estimatedDelivery: string;
  cart: CartItemTypes[];
}

export interface CreateOrderData {
  cart: CartItemTypes[];
  priority: boolean;
  customer: string;
  phone: string;
  address: string;
}

export interface Position {
  latitude: number;
  longitude: number;
}
