import React, { Component } from 'react';

class CreateRoom extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.onInputChange = this.onInputChange.bind(this);
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  // controlled input
  onInputChange(event) {
    this.setState({ ...this.state, term: event.target.value });
  }

  // when createRoom is clicked
  onButtonClick() {
    let dbCon = this.props.db.database().ref('/numPeople');
    dbCon.push({
      numPeople: this.state.term
    });
    // use this.state.term for the value
  }

  render() {
    console.log(this.props);
    return (
      <div className="createRoom">
        <h6 className="createRoom_title">
          Choose your restaurant.
        </h6>

        <div className="createRoom_container">
          <div className="createRoom_container_wrapper">
            <div className="createRoom_input_wrapper">
              <input 
                id="createRoom_input" 
                type="number" 
                placeholder="# Number of People" 
                onChange={this.onInputChange}
              />
            </div>

            <button 
              id="createRoom_button"
              onClick={this.onButtonClick}
            >
              Create Room
            </button>
          </div>
        </div>

        <p className="createRoom_belowText">
          or <span className="createRoom_belowText_underlined">Join a Room</span>
        </p>
      </div>
    );
  }
}

export default CreateRoom;