import "../../Asset/CSS/header.css";
import "../../Asset/SCSS/header.scss";
import $ from "jquery";

import { Link } from "react-router-dom";
import { useEffect } from "react";



const Header = () => {
    useEffect(() => {
        $("li")
        .mouseover(function () {
          $(this).find(".drop-down").slideDown(300);
          $(this).find(".accent").addClass("animate");
          $(this).find(".item").css("color", "#FFF");
        })
        .mouseleave(function () {
          $(this).find(".drop-down").slideUp(300);
          $(this).find(".accent").removeClass("animate");
          $(this).find(".item").css("color", "#000");
        });
      
    })
  return (
    <header className="header">
      <div className="header-left">
        <img className="header-logo-1" src="Image/Logo.png" alt=".." />
        <img className="header-logo-2" src="Image/skyteam.png" alt=".." />
      </div>
      <div className="header-right">
          
        {/* <ul>
          <li>
            <a href="#" className="item">
              Size <i className="fa fa-chevron-down"></i>
            </a>
            <span className="accent"></span>
            <ul className="drop-down">
              <li>
                <a href="#">Small</a>
              </li>
              <li>
                <a href="#">Medium</a>
              </li>
              <li>
                <a href="#">Large</a>
              </li>
              <li>
                <a href="#">Extra Large</a>
              </li>
            </ul>
            <ul className="drop-down">
              <li>
                <a href="#">Small</a>
              </li>
              <li>
                <a href="#">Medium</a>
              </li>
              <li>
                <a href="#">Large</a>
              </li>
              <li>
                <a href="#">Extra Large</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#" className="item">
              Color <i className="fa fa-chevron-down"></i>
            </a>
            <span className="accent"></span>
            <ul className="drop-down">
              <li>
                <a href="#">Blue</a>
              </li>
              <li>
                <a href="#">Black</a>
              </li>
              <li>
                <a href="#">Orange</a>
              </li>
              <li>
                <a href="#">Green</a>
              </li>
              <li>
                <a href="#">Red</a>
              </li>
              <li>
                <a href="#">Yellow</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#" className="item">
              Brand <i className="fa fa-chevron-down"></i>
            </a>
            <span className="accent"></span>
            <ul className="drop-down">
              <li>
                <a href="#">Nike</a>
              </li>
              <li>
                <a href="#">Addidas</a>
              </li>
              <li>
                <a href="#">Newbalance</a>
              </li>
              <li>
                <a href="#">Vans</a>
              </li>
            </ul>
          </li>
        </ul> */}
      </div>
    </header>
  );
};

export default Header;
