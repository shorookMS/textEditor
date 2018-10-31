import React, { Component } from "react";
import "./App.css";

const styles = {
  bold: { fontWeight: "bold" },
  italic: { fontStyle: "italic" },
  underline: { textDecorationLine: "underline" }
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textColor: "black",
      textStyle: {}
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleChangeStyle = this.handleChangeStyle.bind(this);
  }
  handleChange(color) {
    this.setState({ textcolor: color });
  }
  handleChangeStyle(style) {
    let newStyle = { ...this.state.textStyle };

    switch (style) {
      case "bold":
        if (this.state.textStyle.fontWeight) delete newStyle.fontWeight;
        else newStyle = { ...newStyle, ...styles[style] };
        break;
      case "italic":
        if (this.state.textStyle.fontStyle) delete newStyle.fontStyle;
        else newStyle = { ...newStyle, ...styles[style] };
        break;
      case "underline":
        if (this.state.textStyle.textDecorationLine)
          delete newStyle.textDecorationLine;
        else newStyle = { ...newStyle, ...styles[style] };
        break;
      default:
        break;
    }

    console.log(newStyle);

    this.setState({ textStyle: newStyle });
  }

  render() {
    let stylings = ["bold", "italic", "underline"];
    let colors = ["yellow", "blue", "red", "black", "purple"];

    let stylingBoxes = stylings.map(style => {
      return (
        <button
          className="btn btn-primary m-2"
          data-toggle="button"
          style={styles[style]}
          key={style}
          onClick={() => this.handleChangeStyle(style)}
        >
          {style}
        </button>
      );
    });

    let colorBoxes = colors.map(color => {
      return (
        <button
          className="btn btn-dark m-2"
          style={{ backgroundColor: color, height: 30, width: 30 }}
          onClick={() => {
            this.handleChange(color);
          }}
          key={color}
        />
      );
    });

    return (
      <div className="App">
        <div className="container">
          <br />
          {stylingBoxes}
          <br />
          <br />
          <textarea
            className="form-control"
            style={{
              ...this.state.textStyle,
              color: this.state.textcolor
            }}
          />
          <br />
          {colorBoxes}
        </div>
      </div>
    );
  }
}

export default App;
