import React from "react";
import { Companies, CompName, Title, Comp } from "./style";
import Comp1 from './images/comp1.png'
import Comp2 from './images/comp2.png'
import Comp3 from './images/comp3.png'
import Comp4 from './images/comp4.png';

function Testimonial() {
    return (
      <Companies>
        <Title center>Testimonial</Title>
        <CompName>
          <Comp>
            <a href='#'>
              <img src={Comp1} alt='comp1' />
            </a>
          </Comp>
          <Comp>
            <a href='#'>
              <img src={Comp2} alt='comp1' />
            </a>
          </Comp>
          <Comp>
            <a href='#'>
              <img src={Comp3} alt='comp1' />
            </a>
          </Comp>
          <Comp>
            <a href='#'>
              <img src={Comp4} alt='comp1' />
            </a>
          </Comp>
        </CompName>
      </Companies>
    );
};

export default Testimonial;