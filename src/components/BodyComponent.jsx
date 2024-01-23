import React from "react";
import { SlPlaylist } from "react-icons/sl";
import { IoPlayBackOutline, IoPlayOutline, IoPlayForwardOutline } from "react-icons/io5";
import { TbPlayerStop } from "react-icons/tb";

import "../style/BodyComponent.css";

const BodyComponent = () => {
    return (
        <div className="main_div_bodyComponent">
            <div className="div_image">
                <SlPlaylist size={"150px"}/>
            </div>
            <div className="div_name_song">
                Name song
            </div>
            <div className="div_time_play">

            </div>
            <div className="main_div_buttons">
                <IoPlayBackOutline size={"40px"} style={{marginRight: "20px", cursor: "pointer"}}/>
                <IoPlayOutline size={"40px"} style={{marginRight: "20px", cursor: "pointer"}}/>
                <TbPlayerStop size={"40px"} style={{marginRight: "20px", cursor: "pointer"}}/>
                <IoPlayForwardOutline size={"40px"} style={{cursor: "pointer"}}/>
            </div>
        </div>
    );
};

export default BodyComponent;