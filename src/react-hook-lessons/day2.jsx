import React, { useState, useEffect } from 'react';

function Hooks2() {
    const [resourceType, setResourceType] = useState('')
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const [items, setItems] = useState([]);
    
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
          .then(response => response.json())
          .then(json => setItems(json));
    }, [resourceType])
    
    return (
      <>
        <div className='wrapper'>
          <button onClick={() => setResourceType('posts')}>posts</button>
          <button onClick={() => setResourceType('users')}>users</button>
          <button onClick={() => setResourceType('comments')}>comments</button>
        </div>
            
            {/* winwowni olchami:  */} <div> ScreenSize: {windowWidth}</div>
            
        <h3>Results for: {resourceType}</h3>
        {items.map(item => {
            
          return <pre>{JSON.stringify(item)}</pre>;
        })}
      </>
    );
}

export default Hooks2;
