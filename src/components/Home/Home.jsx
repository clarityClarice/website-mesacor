import React from 'react'
import Main from '../Template/Main'
import faqueiros from '../../Assets/faqueiros.jpg'
import cozinha2 from '../../Assets/cozinha2.jpg'
import faqueiro from '../../Assets/faqueiro.jpg'
import './Home.css'

class Home extends React.Component {

    componentDidMount(){
        var slideIndex = 0;
        showSlides();

        function showSlides() {
            var slides = document.getElementsByClassName("mySlides");
            for (var i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";  
            }
            slideIndex++;
            if (slideIndex > slides.length && slides[0]) {slideIndex = 1}  
            slides[slideIndex-1].style.display = "block";  
            if(slides[0])
                setTimeout(showSlides, 5000); 
            }
        }
    render(){
        return(
            <Main title="Home">
                <div className="slideshow-container">
                    <div className="mySlides fader"> 
                        <img src={faqueiros} alt="cozinha" />
                    </div>
                    
                    <div className="mySlides fader"> 
                        <img src={cozinha2} alt="cozinha2"/>
                    </div>
        
                    <div className="mySlides fader">
                        <img src={faqueiro} alt="faqueiro"/>
                    </div>
                </div>
            </Main>
        )
    }

}

export default Home;
    