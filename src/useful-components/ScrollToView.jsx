import { useEffect } from "react";

const ScrollToView = ({ children }) => {
  const fragment = location.hash;

  let id = "";

  if (fragment) {
    id = fragment.slice(1);
  }

  useEffect(() => {
    if (id) {
      const element = document.querySelector(`#${id}`);
      element?.scrollIntoView();
    }
  }, []);

  return children;
};

export default ScrollToView;

//! USE CASE
//? It must be used as a wrapper component, to warp the Element(to be taken into the view).
//? We have to make use of the fragment(hash) section of the url to enable its working.
//? Wrapper component must be used at the lowest level to avoid unnecessary re-rendering of components.
