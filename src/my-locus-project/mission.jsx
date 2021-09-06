import React from "react";
import { ColoredBigText, Mission, MissionImg, MissionText, Title } from "./style";
import MissionPhoto from "./images/missionImg.png";

function OurMission() {
    return (
      <Mission>
        <MissionImg>
          <img src={MissionPhoto} alt='' />
        </MissionImg>
        <MissionText>
          <Title mission>
            Our mission is to deliver aesthetic visual for your home
          </Title>
          <ColoredBigText bigger>
            By applying basic psychology principles, we are going to explain how
            perception works and how we can use this understanding to maximise
            the space that we occupy in our homes.
          </ColoredBigText>
        </MissionText>
      </Mission>
    );
};

export default OurMission;