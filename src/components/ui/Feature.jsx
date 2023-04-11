import React from "react";

function Feature({ icon, title, para }) {
  return (
    <div className="feature toprate">
      <div className="feature__img">{icon}</div>
      <h3 className="feature__subtitle">{title}</h3>
      <p className="feature__para">{para}</p>
    </div>
  );
}

export default Feature;
