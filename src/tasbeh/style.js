import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    0deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(6, 13, 78, 1) 12%,
    rgba(16, 188, 219, 1) 45%,
    rgba(13, 142, 182, 1) 58%,
    rgba(6, 14, 80, 1) 80%,
    rgba(6, 15, 83, 1) 100%,
    rgba(9, 109, 121, 1) 100%,
    rgba(0, 212, 255, 1) 100%
  );
`;

export const Number = styled.div`
  font-size: 60px;
  font-weight: 900;
  color: #ffea00;
`;

export const Button = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
 background: greenyellow;
  border: 3px solid white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 52px;
  color: blue;
  transition: all 0.3s linear;
  :active {
    transform: scale(0.8);
    box-shadow: 10px 10px 10px #202020;
  }
`;