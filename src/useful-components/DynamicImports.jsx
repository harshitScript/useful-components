import { useEffect, useState } from "react";

const isMobile = window.matchMedia("(max-width: 768px)").matches;

function DynamicImports({ mobile, desktop, children }) {
  //! This allows use to make imports dynamic by not including them into initial app loading.

  const [Component, setComponent] = useState(null);

  useEffect(() => {
    const importCallback = isMobile ? mobile : desktop;

    if (importCallback) {
      importCallback().then((componentDetails) => {
        setComponent(componentDetails);
      });
    }
  }, [desktop, mobile]);

  return children(Component ? Component.default : () => null);
}

export default DynamicImports;

//! USE CASE
//? It is used inside the Functional component definition as normal components.
//? But it will only import the component asynchronously when that parent component renders.
/*
<DynamicImports
  desktop={() => import("./component-path-desktop")}
  mobile={() => import("./component-path-mobile")}
>
  {(Component) => <Component />}
</DynamicImports>; 
*/
