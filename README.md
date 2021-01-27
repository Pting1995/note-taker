# Note Taker

[Demo](https://drive.google.com/file/d/1FRbnGlJrxOmtAQ8PiqY_n9BohIyrIt3x/view)

This website was made to help keep notes! The part I worked on was the server.js file! The website uses express to add, remove, fetch and send data from a database! With this app you can write a note title and a note text and save it. When saved it will appear on the left and you can either open it back up to view, or delete it. 

## Deployed Link

* [See Live Site](https://blooming-shore-90228.herokuapp.com/notes)

## Snips of code

Below is a code snippet of the loop that reassigns the unique id. If the id wasn't reassigned, then if you deleted the notes out of order according to ids, then some of the ids wouldn't be able to be deleted.

```
for (var i = 0; i < db.length; i++) {
  if (i !== id) {
    const newNote = {
      title: db[i].title,
      text: db[i].text,
      id: i
    };
    dbArray.push(newNote);
  }
}
```

## Built With

* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [JS](https://www.javascript.com/)
* [GitHub](https://github.com/)
* [Git](https://git-scm.com/)
* [node.js](https://nodejs.org/en/)
* [Express](https://expressjs.com/)
* [npm](https://www.npmjs.com/)
* [Heroku](https://dashboard.heroku.com/apps)

## Authors

* Peter Ting

- [Link to Github](https://github.com/Pting1995)
- [Link to LinkedIn](https://www.linkedin.com/in/pting002/)
- [Link to Portfolio](https://pting1995.github.io/Portfolio-mk2/)

## License

This project is licensed under the MIT License 

## Acknowledgments

* Thank you to UC Berkeley's Extension Bootcamp for giving me the opportunity to work on this project!