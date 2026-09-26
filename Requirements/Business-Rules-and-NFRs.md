# Business Rules, Non-Functional Requirements, and User Roles

## Non-Functional Requirements
| ID | Type | Requirement | Source |
|---|---|---|---|
| NFR-PERF-01 | Performance | The Home page shall load within 3 seconds on a normal broadband connection. | Assumption (industry standard) |
| NFR-SEC-01 | Security | The system shall use HTTPS on Signup/ Login page, Payment page and Checkout page. | Observed |
| NFR-USE-01 | Usability | A first time user shall be able to find a product, add to cart, and complete checkout with 5 minutes without instructions. | Assumption (industry standard) |
| NFR-COMP-01 | Compatibility | The system shall work correctly on the latest versions of Chrome and Safari on macOS. | Assumption (industry standard) |
| NFR-COMP-02 | Compatibility | The system shall display and work correctly at mobile screen width. | Assumption (industry standard) |


## Business Rules
| ID | Business Rule | Related Requirements | Source |
|---|---|---|---|
| BR-01 | The total amount in Downloaded Invoice must be the same as the total amount in Checkout page for the same order. | FR-CHK-11 | Observed (fails for Blue top, see OBS-03)|
| BR-02 | Only the registered users who are logged in can place an order. | FR-CART-07, FR-CART-08 | Observed|
| BR-03 | Email Address for each user must be unique. | FR-REG-02 | Observed|
| BR-04 | The total for each product must equal its price multiplied by its quantity. | FR-CART-04 | Observed|
| BR-05 | The order is accepted ony after the customer provides complete payment details. | FR-CHK-04, FR-CHK-05 | Observed|


## User Roles
| Role | Description | Can do | Cannot do |
|---|---|---|---|
| Guest user | A visitor who is not logged in| Signup / Login, Browse All Products, Search Product, View Product, Submit Product Review, Add to cart, View Cart, Newsletter subscription , Send Contact Us form | Complete checkout (clicking Proceed To Checkout shows a Register / Login pop-up), Place Order, Pay and Confirm Order, Download Invoice, Logout, Delete Account |
| Registered user | A visitor who has an account and is logged in| Browse All Products, Search Product, View Product, Submit Product Review, Add to cart, View Cart, Proceed To Checkout, Place Order, Pay and Confirm Order, Download Invoice, Logout, Newsletter subscription,Send Contact Us form, Delete Account | Signup / Login |
| Admin | Not visible or accessible from public website | Not tested | Not tested |