# Movie Gallery by Fiona

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) with TailwindCSS as CSS framework. :)

## Available Scripts

In the project directory, make sure to add environment variable:

### `REACT_APP_TMDB_API_KEY=<your API key>`

then run,

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


To launch cypress test runner, run
### `yarn e2e:run`

## Limitations and Assumptions
- this assignment only displays the first 20 movies and desktop can be supported but images are HUGE!
- "120 mins" is static since it's not returned on the given API endpoint
- "genre_ids" returned per movie info are assumed to be number of trailers
- fetch movie by id is just filtering the list from the result of the given endpoint to load the movie info when navigating to the movie URL.

## Things to improve
- Hover effect on buttons
- Accessibility
- Support for multiple pages (scroll to load next page)
- Better desktop support
- Add to Favorite function
- Grab actual movie info trom TMFB movie info data
- Support function for "More" button
- Use redux to apply decorator pattern and so instead of getting movie info from api, if necessary information is already loading in the returned movie list, just load the information from the store where id matches the movie from the list of result


## Design patterns and best practices
- Separation of Concerns
- Presentational and Container Components
- Conditional Rendering
- Stateful & stateless functions
- Destructuring
- PropTypes
