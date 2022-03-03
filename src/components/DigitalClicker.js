// Code DigitalClicker Component Here
import React from 'react' //this is always the first step to creating component
//create a DigitalClicker React component. --> class bc holding state






//standard boilerplate
// class DigitalClicker extends React.Component {
//     render() {
//         return(
//             <div>

//             </div>
//         )
//     }
// }


class DigitalClicker extends React.Component {

//This component has an initial state property called timesClicked, which is initially defined as 0.
initialState = {
    timesClicked: 0
}

//Whenever the button is clicked, update the state by incrementing the timesClicked by 1.
//set the state using setState NOT this.state
handleClick = () => {
    this.setState(is => {
        timesClicked: is.timesClicked + 1
    })
}



//The component renders out a button with a label that shows the timesClicked value. This means that, at the start, your button should just say 0.
//button will always have a submit/click and handler
//it should render how many times displayed --> this.state.timesClicked
    render() {
        return(
            <div>
            <button onClick={this.handleClick}>{this.state.timesClicked}</button>                

            </div>
        )
    }
}
