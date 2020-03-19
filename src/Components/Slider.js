import React, { Component } from 'react';
import './Styles/Slider.css'
import slider1 from './Images/slider1.jpg'
import slider2 from './Images/slider2.jpg'
import slider3 from './Images/slider3.jpg'
import slider4 from './Images/slider4.jpg'
import slider5 from './Images/slider5.jpg'

class Slider extends Component {
    constructor(){
        super();
        this.flag=0;
        this.images = [slider1, slider2, slider3, slider4, slider5];
        this.state = {curr:0 , next:1};
        this.slide = this.slide.bind(this);
        this.sizeChange = this.sizeChange.bind(this);
    }

    sizeChange = () => {
        var imgA = document.getElementById("Currentimg");
        var imgB = document.getElementById("Nextimg");
        imgA.style.opacity = 100 +'%';
        imgB.style.opacity = 0 +'%';
        imgA.style.width = 40 +'vw';
        imgB.style.width = 0 +'vw';
        var size = 0;
        var alpha=0;
        var id = setInterval(frame, 0.5);
        function frame() {
          if (size >=40 || alpha >=100) 
          {
            clearInterval(id);
          } 
          else 
          {
            size = size + 0.5;
            alpha = alpha + 1.25
            imgA.style.width = (40-size) +'vw';
            imgB.style.width = size + 'vw';
            imgA.style.opacity = (100-alpha) +'%';
            imgB.style.opacity = alpha+ '%';
          }
        }

        this.slide();
      } 
    
    slide = () => {
        if(this.state.next === 4)
        {
            this.setState({curr:this.state.curr+1 , next:0});
        }
        else if(this.state.curr === 4)
        {   
            this.setState({curr:0 , next:this.state.next+1});
        }
        else
        {
            this.setState({curr:this.state.curr+1 , next:this.state.next+1});  
        }
        this.render();
    }

    render() {
        return (
            <div id="Slider">
                <div><img className='Sliderimg' id="Currentimg" src={this.images[this.state.curr]}/></div>
                <div><img className='Sliderimg' id="Nextimg" src={this.images[this.state.next]}/></div>
            </div>
        );
    }

    componentDidMount()
    {
        if(this.flag===0)
        {
            this.flag=1;
            
        }
        document.querySelector('#Currentimg').style.width = 40 + 'vw';
        document.querySelector('#Nextimg').style.width = 0 + 'vw'
        document.querySelector('#Currentimg').style.opacity = 100 + '%';
        document.querySelector('#Nextimg').style.opacity = 0 + '%';
        setInterval(this.sizeChange ,6000);
    }
}

export default Slider;