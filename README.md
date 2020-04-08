# lab-06-jewelry-store
A jewelry retail site

Lab 06: Products
Goal
Today we will be starting a new project, with basic elements of an e-commerce site including a product page and shopping cart. Decide your product domain and follow repository setup guide, giving your repository a relevant name related to the product.

Topic
Pick a real or fictitious product, up to you. You will ultimately need to come up with (at least) the following for each product:

Property	Description
id	a unique string that identifies this product
name	user friendly name of the product
image	image file name for this image (should live in assets)
description	a longer description of the product
category	the category this product belongs to, limit to one
price	the price the user will pay
Pages
The primary focus today is the product page (products). However, you should slot in a simple home page (index.html), which should have a link to the product page.

You should also have common/main.css used by all pages, as well as a page-specific css page (like products/products.css).

Product Page
The goal for today is to generate a list of products from product data.

Step 1: Design List
Work out the static design for one product in your list. This will help you to flush out what data will be needed. Make sure to include an "Add" button whose value is the product id.

git add, commit, push!

Step 2: Product Data
In a new JavaScript file, named by the domain (class example was fruits.js):

Write out object literals for each product, storing in a variable with same name as product id. These objects are key/value pairs whose values uniquely describe each product. All products should have exactly the same keys!
Create a variable that is an array of all of your products
Export this array as the default export.
git add, commit, push!

Step 3: DOM Render Function
Write a function that takes in a product item and returns a list item DOM element that matches your design.

git add, commit, push!

Step 4: Generate Product List
In your products.js, you will need to:

import your data and your DOM generation function
locate the list element where your products will go
loop through your data
Create a variable that is the singular of your domain list and assign based on the current array index. For example, const fruit = fruits[i];
Pass to your DOM generation function and capture result in variable
Append to the top-level list element
git add, commit, push!

Site-wide Styling
Be thinking about fonts, colors and overall look and feel of your site.

STRETCH: TDD DOM Render Function
Write a test that passes a product to a function and asserts that the return dom with .outerHTML matches your static html example:

Copy html from the page
You will need to remove extraneous whitespace. Don't worry, you can adjust the test as need
Copy the object product data for the one that corresponds to the example, and use as your input to your function
Using the DOM API, create your static example programmatically using JavaScript. Start by creating the top level element (<li> for the product list)
Make the test pass! (Again, you may need to adjust html syntax - pay close attention to test details)
Points Break Down
Looking For	Points (10)
Product HTML works and uses good Semantic Element choices	2
CSS used consciously and correctly	1
Products Object Literals and Array of all Products	2
DOM Render Function	3
Correctly orchestrate product generation in products.js	2
TDD DOM Render Function	+2
© 2020 GitHub, Inc.