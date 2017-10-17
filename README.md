Fetch Practice Lab
---

## Objectives
+ Understand how to make web requests with the `fetch` api
+ Understand how to retrieve data using the `fetch` api

## Introduction

Now that we have made the outlines of a quiz game using a few hardcoded questions, we would like to become more familiar with a nice quiz api.  We will be using the `http://jservice.io/` api.  If you take a look at the page you will see that it allows us to retrieve a list of questions, "clues" and that each clue belongs to a category.  For this lesson, we will just be hitting the categories url.

## Your Task
Here we will be asking you to write methods that take you through working with the `fetch` method, step by step.

+ `getCategories` - Makes a request to http://jservice.io/api/categories?count=5 using the `fetch` method.  This should return the call to `fetch` so that the `getCategories` method returns a promise and is therefore "thennable"
+ `getCategoriesThen` - It calls `.then` on the return value of `getCategories` such that the return value of `getCategoriesThen` returns a promise and it passes data from the api to the next `.then` sequence
+ `getCategoriesThenInterpretResponse` - It sets a global variable called categories equal to the data received from the api
