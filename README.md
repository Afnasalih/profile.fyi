This is a ecommerce website using Next.js and tailwind css.

## Getting Started

First, run the development server:

```bash
npm run dev

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Things that i have done

1. Create a local JSON file containing product data (product name, image, price, description, etc.) using the data displayed the products
2. When Clicking the "Add to Cart" button :
     a) Add the chosen product to a user's virtual shopping cart.
     b) Update the cart icon or a dedicated counter to reflect the number of added items.
     c) Provide animation on confirming the item's addition.
3. Created a dedicated cart page where users can manage their selected products.

   The cart page include:
    a) A list of all added products, displaying Product image, Product name, Product price
    b) Quantity selector (up/down buttons) to adjust the amount of each item.
    c) "Remove" button to delete a specific product from the cart.

   Cart summary section:
   a) Subtotal: Calculate the total cost of all items in the cart based on their quantity and price.
   b) Discounts: Implement the ability to apply discounts on the total price. This could involve:
        Fixed discounts (e.g., "$10 off")
        Percentage discounts (e.g., "10% off")
        choose any of these discount and apply to avail discount. after choosing the discount option the totsl price decreases
   c) Total price (including discounts): Display the final price the user needs to pay.

4. Checkout button: This can redirect to a simulated checkout page.
5. After clicking the checkout button the login page appear so if you are a new user you should register so after registering or login then the checkout 
   page is displayed with message order successful it's done for user authentication.
6. error handling for scenarios like invalid quantity input, if the quantity of the product is select under 1 its displays message "quantity cannot be less 
   than 1).
7. Added search field to search products.



