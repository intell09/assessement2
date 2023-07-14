///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

// const summedPrice = cart.reduce(/* CALLBACK HERE */)


const food = [pizza, pasta, salad];

const summedPrice = food.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(sum); 



//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE
function calcFinalPrice(cartTotal, couponValue, tax) {
    const taxAmount = cartTotal * tax;
    const finalPrice = cartTotal + taxAmount - couponValue;
    return finalPrice;
  }
  const totalPrice = calcFinalPrice(100, 20, 0.06);
console.log(totalPrice); // Output: 86




function calcFinalPrice(cartTotal, couponValue, tax) {
    // Apply coupon discount
    const discountedTotal = cartTotal - couponValue;
    
    // Calculate tax amount
    const taxAmount = discountedTotal * (tax / 100);
    
    // Calculate final price
    const finalPrice = discountedTotal + taxAmount;
    
    return finalPrice;
  }
  
  // Example usage
  const cartTotal = 100;      // Total price of items in the cart
  const couponValue = 20;    // Discount value from a coupon
  const tax = 8.5;           // Tax percentage
  
  const totalPrice = calcFinalPrice(cartTotal, couponValue, tax);
  console.log(totalPrice);  // Output: 93.5
  



//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE
    name, email, address, phone 
*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE
const customer = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    address: '123 Main Street, Cityville',
    phone: '555-123-4567'
  };
  