# React Props & State Workshop

1. create a `MenuList` component;
2. from `App.js`, pass the variable `foodItems` to `MenuList` component as _props_;
3. on `MenuList`, receive the _props_ and render a `MenuItem` component for each item in the array;
4. on `MenuItem`, create a state `isFavorite` that will have the initial value of the _prop_ `isFavorite`;
5. on `MenuItem` access each property from _props_ to show the food item name, image, description and price;
6. create a method `handleClickFavorite` that will switch the state `isFavorite` from true to false.
7. on the div with the id favorite, call the method `handleClickFavorite` when it listens to a click event;
8. on the same div, conditionally render the className value to "isFavorite" or "notFavorite", depending on the state isFavorite
