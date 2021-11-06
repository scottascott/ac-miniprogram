import React, { Component } from 'react';
import ImgSlider from './ImgSlider'
import Icons from './Icons';
class Home extends Component {
    render() {
        return (
            <div>
                <ImgSlider/>
                <Icons/>
            </div>
        );
    }
}

export default Home;