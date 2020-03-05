import React, { Component } from 'react'
import Apis from '../../../envirnoment_api'

class Carousel extends Component{

    state = {
        showInProcess : false,
        slides:[]
    }
    
    componentDidMount(){
        this.setState({
            showInProcess:true,
            currentSlide:0,
        })
        fetch(Apis.banners)
            .then(res => {  
                res.json().then(json => {
                    this.setState({slides:json})
                  });
            })
            .catch('Banner Api',console.log)
    }

    renderImage(imageUrl,index){
       
        return(
            <div key={index} style={ this.state.currentSlide===index ? {display:'block'} : null } className={'mySlides'+(index+1)+' slideshow-container__slides'}>
                <img src={imageUrl} alt={index} style={{width:'100%'}}/>
        <h3>{this.state.showInProcess}</h3>
            </div>
        )
    }

    showSlide(index){
        this.setState({currentSlide:index})
    }

    render(){
        return(
            <section className="carousel">
                <div className="container section-shadow-box">

                {
                    this.state.slides.map((banner,index)=>(
                       this.renderImage(banner.bannerImageUrl,index)
                    ))
                }
                    
                

                <div className="slideshow-container__dots">
                {
                    this.state.slides.map((banner,index)=>(
                        <span key={index} onClick={()=>this.showSlide(index)} className={'slideshow-container__dots__dot slider-dot '+(index===this.state.currentSlide ? 'active' : '')} data-key={index}></span> 
                    ))
                }
                </div>


                </div>
            </section>
        )
    }
}

export default Carousel