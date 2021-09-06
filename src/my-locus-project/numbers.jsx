import React from "react";
import GirlImg from './images/girl.png';
import {
    BigNumbers,
  ColoredBigText,
  ExactNumbers,
  Mission,
  MissionImg,
    MissionText,
  SeeVideo,
} from './style';

function Numbers() {
    return (
      <Mission secondUse>
        <MissionImg smallPhoto>
          <img src={GirlImg} alt='girlPhoto' />
        </MissionImg>
        <MissionText coloredBg lessPadding>
          <BigNumbers>
            <ExactNumbers>
              <h1>105</h1>
              <p>
                project <br /> done
              </p>
            </ExactNumbers>

            <ExactNumbers>
              <h1>12</h1>
              <p>
                years of <br /> experience
              </p>
            </ExactNumbers>

            <ExactNumbers>
              <h1>10+</h1>
              <p>
                big company <br /> partnership
              </p>
            </ExactNumbers>
          </BigNumbers>
          <ColoredBigText>
            "Not able to tell you how happy I am with interior design. Interior
            design has completely surpassed our expectations. Interior design
            saved my business. Interior design is worth much more than I paid."
            <SeeVideo SecondUse>
              <a href='#'>- Roscoe</a>
            </SeeVideo>
          </ColoredBigText>
        </MissionText>
      </Mission>
    );
};

export default Numbers;