import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen, faTags, faBolt } from "@fortawesome/free-solid-svg-icons";
import Feature from "./ui/Feature";

function Features() {
  return (
    <section id="features">
      <div className="features__container">
        <div className="features__row">
          <h2 className="features__title">
            Why choose <span className="purple">Cinemascope</span>
          </h2>
          <div className="features__wrapper">
            <Feature
              icon={<FontAwesomeIcon icon={faBolt} />}
              title="Easy and Quick"
              para="Get access to all movies and TV shows"
            />
            <Feature
              icon={<FontAwesomeIcon icon={faBookOpen} />}
              title="10,000+ Movies"
              para="Cinemascope has movies in all your favourite categories."
            />
            <Feature
              icon={<FontAwesomeIcon icon={faTags} />}
              title="Affordable"
              para="Get your hands on popular movies & shows for as little as $10."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
