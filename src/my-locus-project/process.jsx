import React from 'react';
import { ColoredSmallText, Description, Process, SeeVideo, Title, VideoContent, VideoWrapper } from './style';
import Video from'./images/video.png'



function HowWorks() {
    return (
      <Process>
        <Title center>How it works</Title>
        <Description lessMargin center>
          Spice up your space even simpler <br /> than you think
        </Description>
        <VideoWrapper>
          <VideoContent>
            <img src={Video} alt='' />
          </VideoContent>
          <ColoredSmallText coloredBack padding ExactWidth>
            We provide design and build for commercial building,
            <br /> interior and furniture to improve the better life.
            <SeeVideo>
              <a href='#'>See Video</a>
            </SeeVideo>
          </ColoredSmallText>
        </VideoWrapper>
      </Process>
    );
};

export default HowWorks;