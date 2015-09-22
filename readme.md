# Redux Isomorphic Example

Server-side JavaScript rendering with React/Flux can be confusing. This repo is a Hello, World example of isomorphic/universal/server-side rendering/I don't care what you call it JavaScript.

## Tools

This example utilises the following setup

- Webpack/Babel/ES6
- React 0.14
- React DOM 0.14
- Redux 1.0
- React Router 1.0
- Redux React Router
- Node/Express
- All the new stuff 0.1.alpha-rc-beta-gamma@es6

The Routing is the hardest thing to figure out for serverside rendering, especially with the new React Router and using Redux React Router on top of it just makes it that little bit more confusing, so I'm here to help ease your pain!

## How it works

First, what are we rendering? The React application has one route which displays this component `<h1>{this.props.data}</h1>`. The data comes from the Redux store, which looks like this behind the scenes:

```
{
  data: ''
}
```

The rendering will work like this.

### Server Side
- An HTTP request is received by Node.
- A `render` function is used as the callback `app.use('/', render)`
- Render sets up the data for our application.
- Render sets up a Redux instance with the data.
- React router is run with the current request location.
- An HTML string is rendered.
- The HTML and data payload are interpolated into an HTML template.
- The template is sent to the client.

Now on the client, all together now...

### Client Side

- The browser receives the HTML and renders.
- A script tag is found and a request for the JavaScript application is made.
- The JavaScript application runs, setting up Redux and initialising with the data payload.
- The React router runs and renders.
- React diffs against the current DOM, no changes are found so nothing is re-rendered.
- React sits waiting to pounce on any user interaction!
