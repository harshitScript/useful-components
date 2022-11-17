# Useful components

### DynamicImports.jsx
    - This is a special wrapper component, used to make the imports of the heavy components dynamic.
    - Used when the synchronous imports of the components are becoming render blocking(long time taken tio import the component in a synchronous way).
    - Render Blocking: When the html parsing is delayed due to any possible reason.

### ScrollToView.jsx
    - This is a special wrapper component, used to as a workaround in react to pull the elements into the viewport.
    - Used cause the utility of fragment(hash) part of the url is not supported by the react router yet.
    