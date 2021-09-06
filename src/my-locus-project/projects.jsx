import React from "react";
import {ColoredSmallText, Description, ExactProject, ProjectExample, ProjectName, ProjectPhoto, Projects, Title, TwoLines} from './style'
import Project1 from "./images/project1.png";
import Project2 from './images/project2.png';
import Project3 from './images/project3.png';

function OurProjects() {
    
    return (
      <Projects>
        <Title center projectMarginTop>
          Our project
        </Title>
        <Description lessMargin center>
          Introducing our first official project
        </Description>
        <TwoLines topLine></TwoLines>
        <TwoLines></TwoLines>

        <ProjectExample>
          {/* 1-Project */}
          <ExactProject>
            <ProjectName>Project Livingroom</ProjectName>
            <ColoredSmallText>
              A simple guide to create the perfect livingro- om for . Night Watc
              works beautifully in a wi- de gamut of arrangements.
            </ColoredSmallText>
            <ProjectPhoto>
              <img src={Project1} alt='project1img' className='project-img' />
            </ProjectPhoto>
          </ExactProject>

          {/* 2-Project */}
          <ExactProject>
            <ProjectPhoto>
              <img
                src={Project2}
                alt='project1img'
                className='project-img'
                second
              />
            </ProjectPhoto>
            <ProjectName>Project workspace</ProjectName>
            <ColoredSmallText>
              A simple guide to create the perfect livingro- om for . Night Watc
              works beautifully in a wi- de gamut of arrangements.
            </ColoredSmallText>
          </ExactProject>

          {/* 3-Project */}
          <ExactProject>
            <ProjectName>Library</ProjectName>
            <ColoredSmallText>
              A simple guide to create the perfect livingro- om for . Night Watc
              works beautifully in a wi- de gamut of arrangements.
            </ColoredSmallText>
            <ProjectPhoto last>
              <img src={Project3} alt='project1img' className='project-img' />
            </ProjectPhoto>
          </ExactProject>
        </ProjectExample>
      </Projects>
    );
};

export default OurProjects;