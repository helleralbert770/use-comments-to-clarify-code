# Random Quote Machine

This project is part of FreeCodeCamp's Front End Development curriculum. It is a web application that displays random quotes and allows the user to share them on Twitter.

Note: React 18 has known incompatibilities with the tests for this project (see issue).

## Description

The **Random Quote Machine** displays a random quote and its author. The user can click a button to generate a new random quote, and there's an option to tweet the current quote on Twitter.

### Features:
- Display a random quote from a predefined list.
- Display the author's name alongside the quote.
- Allow the user to tweet the current quote directly.
- Responsive design, centered content, and simple UI.

## User Stories

1. I can see a wrapper element with a corresponding `id="quote-box"`.
2. Within `#quote-box`, I can see an element with a corresponding `id="text"`.
3. Within `#quote-box`, I can see an element with a corresponding `id="author"`.
4. Within `#quote-box`, I can see a clickable element with a corresponding `id="new-quote"`.
5. Within `#quote-box`, I can see a clickable `a` element with a corresponding `id="tweet-quote"`.
6. On first load, my quote machine displays a random quote in the element with `id="text"`.
7. On first load, my quote machine displays the random quote's author in the element with `id="author"`.
8. When the `#new-quote` button is clicked, my quote machine should fetch a new quote and display it in the `#text` element.
9. My quote machine should fetch the new quote's author when the `#new-quote` button is clicked and display it in the `#author` element.
10. I can tweet the current quote by clicking on the `#tweet-quote` `a` element. This `a` element should include the "twitter.com/intent/tweet" path in its `href` attribute to tweet the current quote.
11. The `#quote-box` wrapper element should be horizontally centered. 

## Technologies Used

- **HTML** for the structure of the web page.
- **CSS** (or **SASS**) for styling and layout.
- **JavaScript** (including React) for handling functionality like fetching quotes and updating the page.
- **Bootstrap** (optional) for responsive design.
- **React** for the dynamic rendering of the components.
- **Twitter API** for sharing quotes via Twitter.