import styled from "styled-components";

// Navbar's"
export const Wrapper = styled.div`
width: 85%;
margin: 3% auto;
`;

export const Navbar = styled.div`
display: flex;
align-items: center;
`;

export const LogoWrapper = styled.div`
display: flex;
align-items: center;
width: 25%;
a{
    font-weight: 800;
    font-size: 35px;
    line-height: 52px;
    color: #58A9A5;
}
`;

export const ListWrapper = styled.ul`
  list-style: none;
  `;
export const List = styled.li`
  transition: 0.5s;
  display: inline-block;
  font-size: 25px;
  line-height: 37px;
  color: #404242;
  margin-right: 85px;
  cursor: pointer;
  border-bottom: 3px solid transparent;
  color: ${props => (props.active ? '#58a9a5' : '#404242')};
  border-bottom: ${props => (props.active ? '3px solid #fec62d' : '3px solid transparent')};
  :hover {
    color: #58a9a5;
    border-bottom: 3px solid #fec62d;
  }
`;

export const Button = styled.button`
  width: 271px;
  height: 80px;
  background: #58a9a5;
  font-weight: 500;
  font-size: 25px;
  line-height: 37px;
  color: #ffffff;
  border: 0;
  outline: none;
  cursor: pointer;
  margin-left: auto;
  border-radius: ${props => (props.radius ? '20px 20px 20px 0px;' : '15px')};
  transition: 0.5s;
  &:hover {
    background-color: rgba(55, 55, 255, 0.8);
    /* background-color: #9fada9; */
  }
`;

// Inspiration's

export const InspirePart = styled.div`
display: flex;
margin-top: 105px;
`;

export const Data = styled.div`

`;
export const Title = styled.div`
  font-weight: ${props => (props.mission ? 'bold' : '800')};
  font-size: ${props => (props.mission ? '40px' : '70px')};
  line-height: ${props => (props.mission ? '60px' : '105px')};
  color: #1c2323;
  text-align: ${props => (props.center ? 'center' : '')};
  margin-top: ${(props) => props.projectMarginTop ? '120px' : '0'};
`;

export const Description = styled.div`
  font-size: 30px;
  line-height: 45px;
  color: #404242;
  margin: ${props => (props.lessMargin ? '20px 0 60px 0' : '50px 0')};
  text-align: ${props => (props.center ? 'center' : '')};
`;

export const Photo = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 90vh;
background-color: #CCF0E6;
border-radius: 180px;
`;

export const Process = styled.div`
margin-top: 120px;
`;

export const VideoWrapper = styled.div`
display: flex;
`;

export const VideoContent = styled.div`
width: 67%;
height: 350px;
`;

export const ColoredSmallText = styled.div`
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  background-color: ${(props)=>props.coloredBack ? '#ccf0e6' : ''};
  border-radius: 0px 10px 10px 0px;
  color: #486958;
  padding: ${(props)=>props.padding ?'70px 85px 0 85px' : '0'};
  box-sizing: border-box;
  width: ${(props)=> props.ExactWidth ? '33%' : '85%'};
`;
export const SeeVideo = styled.div`
  font-weight: bold;
  font-size: 20px;
  line-height: 30px;
  margin-top: 40px;
  a {
    color: ${props => (props.SecondUse ? '#5FADA9' : '#486958')};
  }
`;

// Mission Part

export const Mission = styled.div`
  display: flex;
  margin-top: ${props => (props.secondUse ? '62px' : '150px')};
  height: ${props => (props.secondUse ? '600px' : '650px')};
`;
export const MissionImg = styled.div`
  img {
    width: ${props => (props.smallPhoto ? '480px' : '642px')};
    height: ${props => (props.smallPhoto ? '600px' : '650px')};
  }
`;

export const MissionText = styled.div`
  padding: ${props =>
    props.lessPadding ? '0 40px 120px 120px' : '0 20px 0 120px'};
  box-sizing: border-box;
  background-color: ${props => (props.coloredBg ? '#CCF0E6' : 'transparent')};
`;

export const ColoredBigText = styled.div`
  font-weight: 500;
  font-size: ${props => (props.bigger ? '30px' : '25px')};
  line-height: ${props => (props.bigger ? '45px' : '37px')};
  color: #486958;
  margin-top: ${props => (props.bigger ? '50px' : '120px')};
`;

// Projects Part

export const Projects = styled.div`

`;

export const TwoLines = styled.div`
  margin: ${(props)=>props.topLine ? '50px auto 15px auto' : '15px auto 95px auto'};
  width: 135px;
  height: 0px;
  border: 4px solid #58a9a5;
`;

export const ProjectExample = styled.div`
display: flex;
justify-content: space-between;
`;

export const ExactProject = styled.div`
  width: 450px;
  height: 610px;
  transition: 0.5s;
`;

export const ProjectName = styled.div`
  font-weight: bold;
  font-size: 40px;
  line-height: 60px;
  color: #58a9a5;
`;
export const ProjectPhoto = styled.div`
padding: ${(props)=>props.last ? '0' : '0 50px 0 0'};
box-sizing: border-box;
  .project-img {
    width: 100%;
    height: 420px;
    border-radius: 0px 0px 225px 225px;
    margin-top: ${(props)=>props.second ? '0' : '35px'};
  }
`;

export const Companies = styled.div`
margin-top: 250px;
`;

export const CompName = styled.div`
margin-top: 96px;
display: flex;
align-items: center;
justify-content: space-around;
`;

export const Comp = styled.div`
  width: fit-content;
  height: 200px;
  transition: 0.5s;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid white;
  border-radius: 50px 0px 50px 0px;
  &:hover {
    background-color: lightgrey;
    /* background-color: rgba(55, 55, 255, 0.8); */
  }
`;

// Numbers Part

export const BigNumbers = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ExactNumbers = styled.div`
    cursor: pointer;
  h1 {
    font-weight: 800;
    font-size: 70px;
    /* line-height: 105px; */
    color: #58a9a5;
  }

  p {
    color: #58a9a5;
    font-weight: 800;
    font-size: 25px;
    line-height: 37px;
    margin-right: 85px;
  }
`;

// Footer part

export const Footer = styled.div`
margin-top: 240px;
display: flex;
/* align-items: center; */
`;

export const FooterText = styled.div`
  font-weight: 500;
  font-size: 25px;
  line-height: 37px;
  color: #486958;
`;

export const FooterLines = styled.div`
  width: 135px;
  height: 0px;
  border: 4px solid #58a9a5;
  margin: ${(props)=>props.footerLineTop ? '35px 0 15px 0' : '0'};
`;

export const FooterInputSide = styled.div`
  width: 1109.24px;
  height: 450px;
  border: 1px solid #486958;
  padding: 57px 55px 35px 55px;
  box-sizing: border-box;
  margin-left: 100px;
  p {
    font-weight: 500;
    font-size: 25px;
    line-height: 37px;
    color: #486958;
  }
  .secondP{
    margin-top: 57px;
  };
  .textArea{
    margin: 37px 0 20px 0;
  }
  div{
    display: flex;
    justify-content: space-between;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 30px;
  border: 0;
  outline: none;
  border-bottom: 1px solid #000000;
    font-weight: 500;
    font-size: 25px;
    line-height: 37px;
    color: #486958;
`;

export const TextArea = styled.textarea`
  width: 50%;
  height: 80px;
  outline: none;
  font-weight: 400;
  font-size: 23px;
  line-height: 30px;
  color: #486958;
  padding: 5px;
  box-sizing: border-box;
`;