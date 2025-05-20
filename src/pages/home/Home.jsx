import React from 'react';
import Featured from '../../components/featured/Featured';
import Slide from '../../components/Slide/Slide';
import "./Home.scss"
import {cards} from "../../data";
import CatCard from "../../components/catCard/CatCard";


const Home = () =>{
    return (
        <div className="home">
        <Featured/>
           <Slide slidesToShow={5} autoplay={true}>
        {cards.map(card=>(
            <CatCard key={card.id} item={card}/>
        ))}
           </Slide>
           {/* features section is for video part */}
          <div className='features'>
            <div className='container'>
<div className="video-player-wrapper">
                        <video  width="100%" height="100%"
                            src="/img/video3.mp4"                   
                            controls            
                            loop                 
                            muted                
                            autoPlay>
                        </video>
                    </div>
                    <div className="video-overlay-text">
                        <h1>Unlock Your Creative Potential</h1>
                        <p>Find the perfect services for your business, from graphic design to marketing and more.</p>
                        <button>Explore Services</button>
                    </div>  
            </div>
          
          </div>

        </div>
    )
}
export default Home;