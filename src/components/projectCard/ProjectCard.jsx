import React from "react";
import { Link } from "react-router-dom";
import "./ProjectCard.scss"

const ProjectCard = ({item}) =>{
    return(
        <Link to="/" className="link">
            <div className="projectCard">
            <img src={item.img} alt=""/>
              <div className="info">
                <img src={item.pp} alt=""/>
                <div className="text">
                   <h2>{item.cat}</h2>
                   <span>{item.username}</span>
                </div>
              </div>
        </div>
        </Link>
    )
}
export default ProjectCard;

