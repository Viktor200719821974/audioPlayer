import React from "react";

import "../style/MainPage.css";
import HeaderComponent from "../components/HeaderComponent";
import BodyComponent from "../components/BodyComponent";
import FooterComponent from "../components/FooterComponent";

const MainPage = () => {
    return (
        <div className="main_div_mainPage">
            <HeaderComponent/>
            <div className="wrap">
                <BodyComponent/>
            </div>
            <FooterComponent/>
        </div>
    );
};

export default MainPage;