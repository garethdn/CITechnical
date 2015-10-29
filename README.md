# CI Technical Test

### Installation

Run `npm start` to install all dependencies in `package.json`. When complete this will automatically trigger `bower install` and then `grunt build` - finally starting an express server. Navigate to `http://127.0.0.1:8000/` to view the app.

### Requirements

> 1. ~~Consume the good endpoint and display a list of the results on-screen.~~
> 2. ~~Display the results in capitals without using CSS transforms.~~
> 3. ~~Add search functionality to the UI that uses the search endpoint instead.~~
> 4. ~~Take the error endpoint and display the error message it returns.~~
> 5. ~~If the search term called a second time then fetch it from a local JS cache rather than hitting the network.~~

### Notes

* Requirement number `5` seems unusual, as any browser should cache the request to `ancients.json?search=my+search+term` and return a `304`. Regardless, I implemented a result cache stored on the collection, with the results of previous search requests retrievable by
search term.

* If `error` is true, I disable local caching

* Only requests that have a `search` param are cached as per requirement 5. Consequently, calls to the root url (`/ancients.json`) are not cached.

### Possible improvements

* ~~Loading view for when a collection request is underway~~
* Deply demo to Heroku
* Search should add a query string to the url and a router should trigger the network request
* Methods related to searching, error views, loading views can be easily moved to a mixin or base compositve view

### Out of scope improvements

* Design
* Unit tests
* Automated browser tests
* Responsiveness

### License

MIT License
(c) [Gareth Nolan](http://ie.linkedin.com/in/garethnolan/)