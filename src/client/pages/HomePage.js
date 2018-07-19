import React from 'react';

const homePage = () => {
    return (
        <div>
        <h1>Home component!</h1>
            <button onClick={() => console.log('hi there!')}>Press Me</button>

        </div>

)};

export default {
    component: homePage
};