import React from "react";
import {
  Body, Sidebar, Wrapper, Img, Menu, Ul, Li, Link, Select, Option, Members,
  Navbar, InputWrapper, Input, NewsSide, MostData, ContainerWrapper, Container, Definition, Example, Title, PrevNext, PrevWrapper, MainImg
} from "./style";
import Logo from '../my-renault-hw/images/logo.png';
import Home from '../my-renault-hw/images/home.png';
import Garage from '../my-renault-hw/images/garage.png';
import Service from '../my-renault-hw/images/service.png';
import Racers from '../my-renault-hw/images/racers.png';
import Calc from '../my-renault-hw/images/calc.png';
import Settings from '../my-renault-hw/images/setting.png';
import Circle1 from '../my-renault-hw/images/circle1.png';
import Circle2 from '../my-renault-hw/images/circle2.png';
import Circle3 from '../my-renault-hw/images/circle3.png';
import Person from '../my-renault-hw/images/person.png';
import Search from '../my-renault-hw/images/search.png';
import Noti from '../my-renault-hw/images/notification.png';
import PersonIcon from '../my-renault-hw/images/personIcon.png';
import User from '../my-renault-hw/images/user.png';
import Key from '../my-renault-hw/images/key.png';
import Rol from '../my-renault-hw/images/rol.png';
import Remont from '../my-renault-hw/images/remont.png';
import Charge from '../my-renault-hw/images/charge.png';
import Wheal from '../my-renault-hw/images/wheal.png';
import Lock from '../my-renault-hw/images/lock.png';
import Prev from '../my-renault-hw/images/prev.png';
import Next from '../my-renault-hw/images/next.png';
import Feat from '../my-renault-hw/images/features.png';
import Car from '../my-renault-hw/images/car.png';
import '../index.css';


function Renault() {
    return (
      <Wrapper>
        <Sidebar>
          <Img src={Logo} alt='Logo' logo />
          <Menu>Menu</Menu>
          <Ul>
            <Li>
              <Img src={Home} alt='Home' />
              <Link href='#'>Home</Link>
            </Li>
            <Li>
              <Img src={Garage} alt='Home' />
              <Link href='#'>Garage</Link>
            </Li>
            <Li>
              <Img src={Service} alt='Home' />
              <Link href='#'>Service Menu</Link>
            </Li>
            <Li>
              <Img src={Racers} alt='Home' />
              <Link href='#'>Racers</Link>
            </Li>
            <Li>
              <Img src={Calc} alt='Home' />
              <Link href='#'>Calculator</Link>
            </Li>
            <Li>
              <Img src={Settings} alt='Home' />
              <Link href='#'>Settings</Link>
            </Li>
          </Ul>
          <Menu>Scheduled Races</Menu>
          <Ul>
            <Li>
              <Img src={Circle1} alt='circle1' />
              <Link href='#'>MotoGP 2022</Link>
            </Li>
            <Li>
              <Img src={Circle2} alt='circle1' />
              <Link href='#'>Dynamics 22</Link>
            </Li>
            <Li>
              <Img src={Circle3} alt='circle1' />
              <Link href='#'>Olympics</Link>
            </Li>
          </Ul>

          <Members>
            <Img src={Person} />
            <Select>
              <Option selected disabled>
                Choose...
              </Option>
              <Option>Killua</Option>
              <Option>Jones</Option>
              <Option>Obama</Option>
            </Select>
          </Members>
        </Sidebar>

        <Body>
          <Navbar>
            <InputWrapper>
              <Img src={Search} alt='Search' />
              <Input placeholder='Search for a race, car or racer' />

              <Input placeholder='Choose a car' second />
            </InputWrapper>

            <NewsSide>
              <div>
                <Img src={Noti} />
              </div>
              <div>
                <Img src={PersonIcon} />
              </div>
              <div>
                <Img src={User} />
              </div>
            </NewsSide>
          </Navbar>

          <MostData>
            <ContainerWrapper>
              <Container>
                <div>
                  <img src={Key} alt='key' />
                </div>
                <Definition>Start</Definition>
              </Container>
              <Container>
                <div>
                  <img src={Rol} alt='key' />
                </div>
                <Definition>Start</Definition>
              </Container>
              <Container>
                <div>
                  <img src={Remont} alt='key' />
                </div>
                <Definition>Start</Definition>
              </Container>
              <Container>
                <div>
                  <img src={Charge} alt='key' />
                </div>
                <Definition>Start</Definition>
              </Container>
              <Container>
                <div>
                  <img src={Wheal} alt='key' />
                </div>
                <Definition>Start</Definition>
              </Container>
              <Container>
                <div>
                  <img src={Lock} alt='key' />
                </div>
                <Definition>Start</Definition>
              </Container>
            </ContainerWrapper>

            <Example>
              <MainImg>
                <Title>
                  Infiniti Renault
                  <sup
                    style={{
                      fontSize: '16px',
                      lineHeight: '19px',
                      color: '#000000',
                      margin: '0 0 25px 5px',
                    }}>
                    TM
                  </sup>
                </Title>
                <PrevWrapper>
                  <PrevNext>
                    <Img src={Prev} />
                  </PrevNext>
                  <PrevNext next>
                    <Img src={Next} />
                  </PrevNext>
                </PrevWrapper>
              </MainImg>
            </Example>
          </MostData>
        </Body>
      </Wrapper>
    );
  };
  
  export default Renault;
