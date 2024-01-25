import React, { useState, useRef } from "react";

import "../style/BodyComponent.css";
import { tracks } from "../constants/constants";
import ControlsComponent from "./ControlsComponent";
import DisplayTrackComponent from "./DisplayTrackComponent";
import ProgressBarComponent from "./ProgressBarComponent";

const BodyComponent = () => {
    const [trackIndex, setTrackIndex] = useState(0);
    const [currentTrack, setCurrentTrack] = useState(tracks[trackIndex]);
    const [timeProgress, setTimeProgress] = useState(0);
    const [duration, setDuration] = useState(0);
    const audioRef = useRef();
    const progressBarRef = useRef();

    const handleNext = () => {
        if (trackIndex >= tracks.length - 1) {
            setTrackIndex(0);
            setCurrentTrack(tracks[0]);
        } else {
            setTrackIndex((prev) => prev + 1);
            setCurrentTrack(tracks[trackIndex + 1]);
        }
    };

    return (
        <div className="main_div_bodyComponent">
            <div>
                <DisplayTrackComponent
                    currentTrack={currentTrack}
                    audioRef={audioRef}
                    setDuration={setDuration}
                    progressBarRef={progressBarRef}
                    handleNext={handleNext}
                />
                <ControlsComponent
                    audioRef={audioRef}
                    progressBarRef={progressBarRef}
                    duration={duration}
                    setTimeProgress={setTimeProgress}
                    tracks={tracks}
                    trackIndex={trackIndex}
                    setCurrentTrack={setCurrentTrack}
                    setTrackIndex={setTrackIndex}
                    handleNext={handleNext}
                />
                <ProgressBarComponent
                    progressBarRef={progressBarRef}
                    audioRef={audioRef}
                    timeProgress={timeProgress}
                    duration={duration}
                />
            </div>
        </div>
    );
};

export default BodyComponent;