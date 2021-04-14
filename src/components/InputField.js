import React from "react";

class InputField extends React.Component {
  constructor() {
    super();
    this.state = { title: "" };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { value } = event.target
    this.setState({ title: value });
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.title}
          onChange={this.handleChange}
          placeholder="Vul je boodschappen in"
        ></input>
        <button
          onClick={() => {
            this.props.click(this.state.title);
            this.setState({
              title: "",
            });
          }}
        >
          Voeg toe
        </button>
      </div>
    );
  }
}

export default InputField;
