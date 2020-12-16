
import db from './db';
import {send} from './mail';

// Testing numbers 
export function absolute(number:number) {
  if (number >= 0) return number; 
  return -number; 
  
}

// Testing strings 
export function greet(name:string) { 
  return 'Welcome ' + name; 
}

// Testing arrays 
export function getCurrencies() { 
  return ['USD', 'AUD', 'EUR'];
}

// Testing objects 
export function getProduct(productId:number) { 
  return { id: productId, price: 10 };
}

// Testing exceptions 
export function registerUser(username:any) { 
  if (!username) throw new Error('Username is required.');

  return { id: new Date().getTime(), username: username }
}

// Mock functions 
export function applyDiscount(order:{customerId:number, totalPrice:number}) { 
  const customer = db.getCustomerSync(order.customerId);

  if (customer.points > 10) 

  order.totalPrice *= 0.9; 
}

// Mock functions 
export function notifyCustomer(order:any) { 
  const customer = db.getCustomerSync(order.customerId);

  send(customer.email, 'Your order was placed successfully.');
}