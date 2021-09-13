import React, { useContext } from 'react'
import { InfoContext } from './store';

export const About = () => {
    const [data, setData] = useContext(InfoContext);
    console.log(data);
    return (
      <div>
        <div>
          {data.map((val, index) => (
            <ul key={index}>
              <li>{val.id}</li>
              <li>{val.name}</li>
              <li>{val.surname}</li>
            </ul>
          ))}
        </div>
      </div>
    );
};
