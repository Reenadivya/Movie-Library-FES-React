import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSuitcase,
  faCode,
  faComputerMouse,
} from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <footer>
      <div className="footer__container">
        <div className="footer__content">
          <div className="footer__left">
            <p className="footer__left-text">&copy; 2023 Movie App</p>
          </div>
          <div className="footer__right">
            <ul className="social__links">
              <li className="social__link">
                <Link
                  to="https://www.linkedin.com/in/reena-divya/"
                  target="_blank">
                  <FontAwesomeIcon className="fab" icon={faSuitcase} />
                </Link>
                <Link
                  to="https://www.linkedin.com/in/reena-divya/"
                  target="_blank">
                  LinkedIn
                </Link>
              </li>
              <li className="social__link">
                <Link to="https://github.com/Reenadivya" target="_blank">
                  <FontAwesomeIcon className="fab" icon={faCode} />
                </Link>
                <Link to="https://github.com/Reenadivya" target="_blank">
                  Github
                </Link>
              </li>
              <li className="social__link">
                <Link to="https://github.com/Reenadivya" target="_blank">
                  <FontAwesomeIcon className="fab" icon={faComputerMouse} />
                </Link>
                <Link to="https://github.com/Reenadivya" target="_blank">
                  Website
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
