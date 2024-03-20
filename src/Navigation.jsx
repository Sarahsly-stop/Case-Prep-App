// App.js or separate Navigation component
// Navigation.js
import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div>
      <Link to="/frameworks">Frameworks</Link>
      <Link to="/graphs">Graphs</Link>
      <Link to="/math">Math</Link>
      <Link to="/case-examples">Case Examples</Link>
    </div>
  );
}

export default Navigation;
