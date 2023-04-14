import React from "react";
import IT from "../img/icons/computer.svg"
import EL from "../img/icons/electric.svg"
import PL from "../img/icons/plumber.svg"
import LOGO from "../img/logo.svg"
import "../style/ExpertCategories.css"

const ExpertCategories = props =>{
    return (
        <div className="expert_section_container">
            <div className="left">
                <div className="header-section">
                    <img src={LOGO} alt="err" />
                </div>
                <span className="text_area">HIRE YOUR EXPERT</span>
                <span className="text_area_small">What are you looking for ?</span>
                <div className="categorie_box">
                <div className="card">
                    <div className="icon">
                        <img src={IT} alt="err" />
                    </div>
                </div>
                <div className="card">
                    <div className="icon">
                        <img src={EL} alt="err" />
                    </div>
                </div>
                <div className="card">
                    <div className="icon">
                        <img src={PL} alt="err" />
                    </div>
                </div>
            </div>
            </div>
            <div className="right">
                <div className="about">
                    <div className="info-title">Dev Ops</div>
                    <div className="info-text">DevOps is a methodology in the software development and IT industry. Used as a set of practices and tools, DevOps integrates and automates the work of software development and IT operations as a means for improving and shortening the systems development life cycle</div>
                </div>
            </div>

        </div>
    )
    
}

export default ExpertCategories