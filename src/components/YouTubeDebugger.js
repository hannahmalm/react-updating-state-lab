// Code YouTubeDebugger Component Here

import React from 'react'
//standard boilerplate
class YouTubeDebugger extends React.Component {

    initialState = {
        errors: [],
        user: null,
        settings: {
            birate: 8,
            video: {
                resolution: '1080p'
            }
        }
    }

    state = this.initialState

    //first thing in a handle Change or handle submit is this.setState()
    //Clicking this button changes the settings.bitrate state property to 12.
     handleChangeB = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                birate: 12  
            }

        }) 
    }


    // Clicking this button changes the settings.video.resolution state property to '720p'.
    handleChangeR = () => {
        this.setState({
            settings: {
            ...this.state.settings,
            video: {
                ...this.state.settings.video,
                resolution: '720p'
            }
            }
        });

   


    //Create a button with the class 'bitrate'. Clicking this button changes the settings.bitrate state property to 12.
    //Create a button with the class 'resolution'. Clicking this button changes the settings.video.resolution state property to '720p'.
    render()
        return(
            <div>
                <button className='birate' onClick={this.handleChangeB}>Change Birate</button>
                <button className='resolution'onClick={this.handleChangeR}>Change Resolution</button>
            </div>
        )
    }
}


//This component has several state properties. The initial state shape looks like this: