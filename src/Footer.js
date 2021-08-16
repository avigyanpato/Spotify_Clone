import React from 'react'
import "./Footer.css"
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import { Grid, Slider } from "@material-ui/core";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
function Footer() {
    return (
        <div className="footer">
            <div className="footer_left">
                <img className="footer_albumLogo" src="https://upload.wikimedia.org/wikipedia/en/thumb/2/2e/Bohemian_Rhapsody_poster.png/220px-Bohemian_Rhapsody_poster.png" alt=""/>    
                <div className="footer_songInfo">
                    <h4>Queen</h4>
                    <p>Bohemian Rhapsody</p>
                </div>
            </div>

            <div className="footer_center">
                <ShuffleIcon className="footer_green"/>
                <SkipPreviousIcon /*onClick={skipNext}*/ className="footer__icon" />
                <PlayCircleOutlineIcon /*onClick={handlePlayPause}*/ fontSize="large" className="footer__icon"/>
                <SkipNextIcon /*onClick={skipPrevious}*/ className="footer__icon" />
                <RepeatIcon className="footer_green" />
            </div>

            <div className="footer_right">
            <Grid container spacing={2}>
               <Grid item>
                 <PlaylistPlayIcon />
               </Grid>
               <Grid item>
                 <VolumeDownIcon />
               </Grid>
               <Grid item xs>
                 <Slider  />
               </Grid>
            </Grid>
            </div>
        </div>
    );
}

export default Footer
