import { InspirePart, Data, Title, Description, Button, Photo } from "./style";
import InspirePhoto from "./images/inspirePhoto.png";


function Inspiration() {
    return (
      <InspirePart>
        <Data>
          <Title>Get the inspiration of interior design here</Title>
          <Description>
            architecture not only about engineering, it even lands to art and
            aesthetics. With us, you will get a residentical design with an
            extraordinary touch of art.
          </Description>
          <Button radius>Let's go</Button>
        </Data>
        <Photo>
          <img src={InspirePhoto} alt='InspirePhoto' />
        </Photo>
      </InspirePart>
    );
}

export default Inspiration;