Products Grid
====

This is an ecommerce site, where you can buy all sorts of ascii faces like `(ノ・∀・)ノ` and `¯_(ツ)_/¯`, in a wide variety of font sizes. The homepage should display a list of products for people to browse.

How to run the application locally
====
After cloning this repository, install dependencies by running ```yarn``` then run ```yarn start``` to start the application. The application should open up in your browser.

Implemented Features
====
- products are displayed in a grid.
- give the user an option to sort the products in ascending order. Can sort by "size", "price" or "id". The products list should be reloaded when a new sorting option is chosen.
- each product has :
  - a "size" field, which is the font-size (in pixels). We should display the faces in their correct size, to give customers a realistic impression of what they're buying.
  - a "price" field, in cents. This should be formatted as dollars like `$3.51`.
  - a "date" field, which is the date the product was added to the catalog. Dates should be displayed in relative time (eg. "3 days ago") unless they are older than 1 week, in which case the full date should be displayed.
- the product grid should automatically load more items as you scroll down.
- display an animated "loading..." message while the user waits for the data to load.
- when the user reaches the end and there are no more products to display, show the message "~ end of catalogue ~".

### Ads features

- after every 20 products we need to insert an advertisement from one of our sponsors. Use the same markup as the advertisement in the header shown in `public/index/html`, but make sure the `?r` query param is randomly generated each time an ad is displayed.
- Ads should be randomly selected, but a user must never see the same ad twice in a row.

Not Implemented Features
==== 
- to improve the user's experience, we should always pre-emptively fetch the next batch of results in advance, making use of idle-time.  But they still should not be displayed until the user has scrolled to the bottom of the product grid.
    - ```I would fetch the next batch after initially fetching the first batch of products and store in a variable and use the products stored in that variable to update the view everytime the user scrolls to the bottom of the screen while also fetching the next batch and updating the variable with the next batch also.```
- Responsive and elegant UI
    - ```I would have made the UI reponsive across desktop and mobile systems and also implemented an elegant and uniform styling across the application.```

Features that could be improved upon
==== 
- each product has :
  - a "date" field, which is the date the product was added to the catalog. Dates should be displayed in relative time (eg. "3 days ago") unless they are older than 1 week, in which case the full date should be displayed.
    - ```I would improve on the date utility function I implemented to account for when the day a product is added to a catalog less than a day.```
- Ads should be randomly selected, but a user must never see the same ad twice in a row.
    - ```I would keep track of each random number generated in an array and before creating an add check to see if the generated number is the same as the last elemented inserted into the array and if it is I will regenerate a new random number to prevent users seeing the same ad twice in a row.```