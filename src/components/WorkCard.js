import "./WordCardStyle.css"
import React from 'react'
import { NavLink } from "react-router-dom";

const WorkCard = (props) => {
    return (
        <div className="project-card">
                    <img src={props.imgsrc} alt="project1"/>
                    <h2 className="project-title">{props.title}</h2>
                    <div className="pro-details">
                        <p>{props.text}</p>
                        <div className="pro-btns">
                            <NavLink to={props.view} className="btn">View</NavLink>
                            <NavLink to="https://mahmoudessam16.github.io/Ecommerce/index.html" className="btn">Source</NavLink>
                        </div>
                    </div>
                </div>
    )
}

export default WorkCard
