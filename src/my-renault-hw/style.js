import styled, { css } from "styled-components"

// rang, razmerlar uchun:
const allColor = {
  bgColor: '',
  textColor: '',
};

// bir-xil bolgan kodlar toplami:
const commonStyle = css`
  cursor: pointer;
`;

export const Wrapper = styled.div`
display: flex;
margin: 3% auto;
width: 90%;
/* border: 1px solid black; */
`;

export const Sidebar = styled.div`
  width: 256px;
  /* border: 1px solid blue; */
`;

export const Body = styled.div`
  flex: 1;
  /* border: 1px solid red; */
`;

export const Img = styled.img`
  ${commonStyle}
  display: ${props => (props.logo ? 'block' : 'inline-block')};
`;
export const Menu = styled.div`
  font-family: Product Sans;
  color: #3629b7;
  font-size: 14px;
  line-height: 17px;
  margin: 90px 0 23px 0;
  ${commonStyle}
`;
export const Ul = styled.ul``;
export const Li = styled.li`
display: flex;
align-items: center;
margin-bottom: 36px;
`;
export const Link = styled.a`
  margin-left: 21px;
  font-size: 14px;
  line-height: 17px;
  color: #838383;
`;

export const Members = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 184.35px;
  height: 63.69px;
  background: #f9faff;
  border-radius: 5px;
`;
export const Select = styled.select`
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: #591aed;
  width: 100px;
  height: 30px;
  border: 0;
  outline: none;
  background: #f9faff;
  ${commonStyle}
`;
export const Option = styled.option``;

export const Navbar = styled.div`
  background: #fbfcff;
  height: 100px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #f2f2f2;
`;

export const InputWrapper = styled.div`
display: flex;
align-items: center;
position: relative;
Img{
  position: absolute;
  left: 40px;
}
`;
export const Input = styled.input`
  margin-left: 30px;
  width: 420px;
  height: 48.67px;
  background: #ffffff;
  border: 1px solid #e7e7e7;
  box-sizing: border-box;
  border-radius: 5px;
  outline: none;
  padding: ${props => (props.second ? '17px 20px' : '0 57px')};
  box-sizing: border-box;
  ::placeholder {
    font-family: Google Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 15px;
    color: #000000;
    opacity: 0.4;
  }
`;

export const NewsSide = styled.div`
  display: flex;
  align-items: center;
  div {
    padding: 0 30px;
    box-sizing: border-box;
  }
`;

export const MostData = styled.div`
  background: #fbfcff;
  padding: 43px 110px;
  box-sizing: border-box;
  div{
    display: flex;
  }
`;

export const ContainerWrapper = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`;

export const Container = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 102px;
  background: #fefeff;
  border-radius: 10px;
  box-shadow: 0px 100px 80px rgba(41, 72, 152, 0.05),
    0px 64.8148px 46.8519px rgba(41, 72, 152, 0.037963),
    0px 38.5185px 25.4815px rgba(41, 72, 152, 0.0303704),
    0px 20px 13px rgba(41, 72, 152, 0.025),
    0px 8.14815px 6.51852px rgba(41, 72, 152, 0.0196296),
    0px 1.85185px 3.14815px rgba(41, 72, 152, 0.012037);
`;
export const Definition = styled.div`
  margin-top: 15px;
  font-family: Google Sans;
  font-size: 12px;
  line-height: 15px;
  /* text-align: center; */
  color: #bcbdc2;
`;









export const Example = styled.div`
margin-top: 108px;

`;

export const Title = styled.div`
  font-family: Gilroy-Light;
  font-size: 48px;
  line-height: 56px;
  color: #000000;
`;

export const PrevNext = styled.div`
  margin-left: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: #fefeff;
  box-shadow: 0px 100px 80px rgba(41, 72, 152, 0.05),
    0px 64.8148px 46.8519px rgba(41, 72, 152, 0.037963),
    0px 38.5185px 25.4815px rgba(41, 72, 152, 0.0303704),
    0px 20px 13px rgba(41, 72, 152, 0.025),
    0px 8.14815px 6.51852px rgba(41, 72, 152, 0.0196296),
    0px 1.85185px 3.14815px rgba(41, 72, 152, 0.012037);
  border-radius: 10px;
`;

export const PrevWrapper = styled.div`
margin-left: 190px;
`
export const MainImg = styled.div`

`