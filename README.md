### Separate Container Components From Presentational Components

Separating container components from presentational components is a popular React programming pattern.

Here’s the basic idea behind it: if a component has to have state, make calculations based on props, or manage any other complex logic, then that component shouldn’t also have to render HTML-like JSX.

Instead of rendering HTML-like JSX, the component should render another component. It should be that component’s job to render HTML-like JSX.

Following this pattern separates your business logic from your presentational logic.

If you have a component class with nothing but a render function (like GuineaPigPresentational.js), then you can rewrite that component class in a very different way. Instead of using React.Component, you can write it as a JavaScript function!

A component class written as a function is called a stateless functional component.