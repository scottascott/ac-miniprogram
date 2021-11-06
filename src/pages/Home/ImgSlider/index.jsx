import React from 'react'
import { Carousel } from 'antd';
import images from './images'
const contentStyle = {
  width:'100%',
  innerWidth:'100%',
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
function App() {
  return (
    <Carousel effect="fade" autoplay>
      {images.map(({ url, title }, index) => (
        <div key={index}>
          <img style={contentStyle} src={url}  alt={title} />
        </div>
      ))}
    </Carousel>
  )
}

export default App
