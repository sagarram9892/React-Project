import React from "react";
import "./About.css";
import about_img from "../../assets/about.png"
import play_icon from "../../assets/play-icon.png"


function About({setPlayState}) {
  return <div className="about" id="about">
<div className="about-left">
    <img src={about_img} alt="" className="about-img" />
    <img src={play_icon} alt="" className="play-icon" onClick={()=>{setPlayState(true)}} />

</div>
<div className="about-right">
    <h3>ABOUT UNIVERSTY</h3>
    <h2>Nurturing Tommorow Leaders Today</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur harum illo suscipit vero, facilis perspiciatis deleniti, minima ullam quia repellat vel. Rem quos rerum mollitia.</p>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta repudiandae rerum minus nesciunt ipsam debitis, iure ut pariatur quaerat, placeat odit dolore.</p>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt doloremque, eius labore atque aliquid tenetur cumque harum distinctio, numquam dignissimos laboriosam dolorem fugit exercitationem praesentium nulla maiores? Autem, fuga voluptatum.</p>
</div>
  </div>;
}

export default About;
