import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import NavBar from './components/NavBar/NavBar.js';
import GraphContainer from './components/GraphContainer/GraphContainer.js';
import Bar from './components/GraphContainer/Bar.js';
import StateCheckboxContainer from './components/StateCheckboxContainer/StateCheckboxContainer.js';
import CheckboxItem from './components/StateCheckboxContainer/CheckboxItem.js';


class App extends Component {
  state = {
    availableStates: 
      [
        {
          "state": "ak",
          "sightings": 319
        },
        {
          "state": "al",
          "sightings": 642
        },
        {
          "state": "ar",
          "sightings": 588
        }
      ],
    selectedStates: [],
  }

  componentDidMount = () => {
    fetch("sightings-by-state.json")
    .then(response => response.json())
    .then(jsonData => {
      console.log(jsonData);
      this.setState({
        availableStates: jsonData
      })
    });
  }


  onStateSelect = (index) => {
    console.log('getting state selection...');

    // copy both arrays for manipulation
    const availableStates = this.state.availableStates.slice();
    const selectedStates = this.state.selectedStates.slice();

    //indicate which state is being selected
    const desiredState = this.state.availableStates[index];

    // check if the desiredState is already selected
    if (selectedStates.indexOf(desiredState) > -1) {
      
      return;

    } else {
      
      // add the state to selected
      selectedStates.push(desiredState);
      
      // update state and re-render
      this.setState({
        availableStates: availableStates,
        selectedStates: selectedStates,
      }); 
    } 
  }


  removeStateSelect = (index) => {
    console.log('removing state from selection...')

    // copy both arrays for manipulation
    const availableStates = this.state.availableStates.slice();
    const selectedStates = this.state.selectedStates.slice();
    
    const selectedIndex = selectedStates.findIndex(stateInfo => stateInfo.state === availableStates[index].state);

    //indicate which state is being removed
    const desiredState = this.state.availableStates[index];
    
    //remove the state from selected
    selectedStates.splice(selectedIndex, 1);
        
    // update state and re-render
    this.setState({
      availableStates: availableStates,
      selectedStates: selectedStates,
    });
  }




  render() {
    
    return (
      <div>

        <NavBar />

        <StateCheckboxContainer>

          {
            this.state.availableStates.map((stateInfo, index) => (
                <CheckboxItem
                  selectedState={stateInfo.state}
                  onClick={() => {
                    this.state.selectedStates.indexOf(stateInfo) > -1 
                      ? this.removeStateSelect(index)
                      : this.onStateSelect(index)
                      }
                    } 
                >
                  {stateInfo.state}
                </CheckboxItem>
            ))
          }

        </StateCheckboxContainer>

        <GraphContainer>
          
          {
            this.state.selectedStates.map(stateInfo => (
              <Bar style={{height: (stateInfo.sightings/22) + "px"}}>
                {stateInfo.state} - {stateInfo.sightings}
              </Bar>
            ))
          }

        </GraphContainer>
      </div>
    );
  }
}

export default App;
