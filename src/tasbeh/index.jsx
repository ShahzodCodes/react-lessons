import React, {useState} from 'react'
import { Wrapper, Number, Button } from './style';
import Yasin from './yosin.mp3'
import Mulk from './mulk.mp3';

export const Tasbeh = () => {
    const [count, setCount] = useState(0);
    return (
      <Wrapper>
        <div style={{ padding: '10px', boxSizing: 'border-box' }}>
          <h2 style={{ color: 'greenyellow', textAlign: 'center' }}>
            Yasin Surah
          </h2>
          <audio controls>
            <source src={Yasin} type='audio/ogg'></source>
          </audio>
        </div>
        <div style={{ padding: '10px', boxSizing: 'border-box' }}>
          <h2 style={{ color: 'greenyellow', textAlign: 'center' }}>
            Mulk Surah
          </h2>
          <audio controls>
            <source src={Yasin} type='audio/ogg'></source>
          </audio>
        </div>
        <Number>{count}</Number>
        <Button onClick={() => setCount(count + 1)}>+</Button>
      </Wrapper>
    );
}
