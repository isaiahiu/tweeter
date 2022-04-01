# Tweeter Project

Tweeter is a simple, single-page Twitter clone using HTML, CSS, JS, jQuery and AJAX.

Created by isaiahiu as a front-end (client-side) educational exercise .

## Final Product

!["Screenshot of Homepage"](https://github.com/isaiahiu/tinyapp/blob/master/docs/urls-page.png?raw=true)
!["Screenshot of Registration page"](https://github.com/isaiahiu/tinyapp/blob/master/docs/register-page.png?raw=true)
!["Screenshot of Short Url page"](https://github.com/isaiahiu/tinyapp/blob/master/docs/shorturl-page.png?raw=true)

## Dependencies

- body-parser
- chance
- Express
- md5

## Getting Started

- Install all dependencies (using the `npm install` command).
- Run the development web server using the `node express_server.js` command.
- Navigate to `localhost:3000` in a browser where users will be prompted to log in.
- Register link will be available in the top right corner of header of users without an account.
- Users must be logged in to be able to create new URLs, edit, or delete their own URLs.
- Without an account, user can still use short links.

## Project Features

- A client-side Single Page App (SPA)
- Communicates with a server via AJAX

#### Display

- Navigation Bar:
  - [x] is fixed to the top
  - [x] has padding on both sides
  - [x] contains Compose button
- Compose Tweet box:
  - [x] is displayed above the list of tweets
  - [x] contains a form for submitting tweets, which itself contains:
    - [x] a textarea for new tweet content
    - [x] a left-aligned button for submitting new tweets
    - [x] contains a Character Counter, right-aligned, which by default shows 140
- List of Tweets:
  - [x] displays tweets in reverse-chronological order (that is, by creation time descending)
- Individual Tweets have a:
  - [x] header, which contains the user's:
  - [x] avatar, on the left
  - [x] name, on the left and after the avatar
  - [x] handle, on the right
  - [x] body, which contains the tweet text
  - [x] footer, which displays:
  - [x] how long ago the tweet was created, on the left
  - [x] "Flag", "Re-tweet" and "Like" action icons on the right

#### Behavioural

- Individual Tweets:
  - [x] When the user hovers over a tweet, that tweet should display a box shadow.
- Action Icons:
  - [x] When the user hovers over an icon ("Flag", "Re-tweet" and "Like") the icon should change colour.
- Character Counter:
  - [x] When a user types into the Compose Tweet textarea, the Character Counter is updated to show how many characters a user may still type (subtracting the number of characters they've typed from the maximum allowable character count of 140)
  - [x] The Character Counter turns red (or similar) when more than 140 characters have been typed into the Compose Tweet textarea, and it shows how many characters over the 140 limit have been typed (using a negative number)
- Compose Tweet:
  - [x] When a user submits an invalid tweet (the tweet textarea is empty or contains more than 140 characters), an appropriate error message is displayed
  - [x] When a user submits a valid tweet, the list of tweets is refreshed (displaying the new tweet), the Compose Tweet textarea is cleared, and the Character Counter is reset (to 140)
-

#### Stretch:

- Navigation Bar:
  - When a user clicks the Compose button in the Navigation Bar:
    - [ ] if the Compose Tweet box is currently hidden, then it is shown, and the textarea inside it is auto-focused
    - [x] if the Compose Tweet box is currently showing, then it is hidden
    - [x] in either case, transitions between 'shown' and 'hidden' states should be animated
- Second Toggle Button:
  - [ ] When a user scrolls a second button appears in the lower right hand corner:
  - [ ] if the user clicks this button they are brought back up to the top of the page
