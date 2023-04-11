import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGun, faSadCry, faLaugh } from "@fortawesome/free-solid-svg-icons";
import Feature from "./ui/Feature";

function TopRated() {
  return (
    <section id="features">
      <div className="features__container">
        <div className="features__row">
          <h2 className="toprated__title">Top Rated Categories</h2>
          <div className="toprated__wrapper">
            <Link to="/categories/18" className="toprated__link">
              <Feature
                title="Drama"
                icon={<FontAwesomeIcon icon={faSadCry} />}
              />
            </Link>
            <Link to="/categories/35" className="toprated__link">
              <Feature
                title="Comedy"
                icon={<FontAwesomeIcon icon={faLaugh} />}
              />
            </Link>
            <Link to="/categories/28" className="toprated__link">
              <Feature title="Action" icon={<FontAwesomeIcon icon={faGun} />} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TopRated;
