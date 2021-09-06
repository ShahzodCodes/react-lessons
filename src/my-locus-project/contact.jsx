import React from "react";
import {
  Footer,
  FooterText,
  Title,
  FooterLines,
  FooterInputSide,
  Input,
  TextArea,
  Button,
} from './style';

function Contact(){
    return (
      <Footer>
        <div>
          <Title>Contact Us</Title>
          <FooterText>
            Have any questions? Want help before getting started?
          </FooterText>
          <FooterLines footerLineTop></FooterLines>
          <FooterLines></FooterLines>
        </div>

        <FooterInputSide>
          <p>Full name</p>
          <Input type='text' />
          <p className='secondP'>Email address</p>
          <Input type='text' />

          <p className='textArea'>Description</p>
          <div>
            <TextArea />
            <Button radius>Send now</Button>
          </div>
        </FooterInputSide>
      </Footer>
    );
};

export default Contact;