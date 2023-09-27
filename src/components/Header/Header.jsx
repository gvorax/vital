import React from "react";
import "./HeaderStyle.scss";
import Navbar from "../NavbarX";
import Hero from "../Hero/Hero";

import $ from 'jquery';
import 'jquery.ripples';
import { useEffect } from "react";

const Header = () => {
  useEffect(() => {
    $('#water-element').ripples({
      resolution: 256,
      dropRadius: 20,
      perturbance: 0.04,
    });

    // Clean up when the component unmounts
    return () => {
      $('#water-element').ripples('destroy');
    };
  }, []);

  return (
    <div className="header">
      <div id="water-element" className="header">
          <div>
            <Navbar />
            <Hero />
          </div>
          
      </div>
    </div>
  );
};

export default Header;
