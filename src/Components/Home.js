import React from 'react';

const user = {
    name: 'vivek shukla',
    imageUrl: 'https://images.unsplash.com/photo-1737405555489-78b3755eaa81?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8',
    imageSize: 100,
    radious: 50,
};

function Home() {
  return (
    <>
        <h1>{user.name}</h1>
        <img
            className='avtar'
            src={user.imageUrl}
            alt={'Photo of' + user.name}
            style={{
                width: user.imageSize,
                height: user.imageSize,
                borderRadius: user.radious,
            }}
        />
    </>
  )
}

export default Home;
