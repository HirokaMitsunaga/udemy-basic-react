import React from 'react';
export const ColorfulMessage = ({ color, children }) => {
  console.log('--ColorfulMessage--');
  const contentStyleA = {
    color, //省略記法
    fontSize: '18px',
  };
  return <p style={contentStyleA}>{children}</p>;
};

// export default ColorfulMessage;
