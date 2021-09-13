import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import { Wrapper } from './my-locus-project/style';
// import AllNavbar from './my-locus-project/navbar';
// import Inspiration from './my-locus-project/inspire';
// import HowWorks from './my-locus-project/process';
// import OurMission from './my-locus-project/mission';
// import OurProjects from './my-locus-project/projects';
// import Testimonial from './my-locus-project/companies';
// import Numbers from './my-locus-project/numbers';
// import Contact from './my-locus-project/contact';
// import Renault from './my-renault-hw/car'
import { About } from './classWork'
import Store from './classWork/store';
import { Tasbeh } from './tasbeh';


ReactDOM.render(
  <React.StrictMode>
    {/* <Wrapper>
      <AllNavbar />
      <Inspiration />
      <HowWorks />
      <OurMission />
      <OurProjects />
      <Testimonial />
      <Numbers />
      <Contact />
    </Wrapper> */}
    {/* <Store>
      <About />
    </Store> */}
    <Tasbeh />
  </React.StrictMode>,
  document.getElementById('root')
);


