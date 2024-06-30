import React, { Component } from "react"

class ToggleButton extends Component {
  constructor(props) {
    super(props)
    this.state = {
      buttonText: "Show"
    }
  }

  handleClick = () => {
    this.setState(prevState => ({
      buttonText: prevState.buttonText === "Show" ? "Hide" : "Show"
    }))
  }

  render() {
    return (
      <div className="container">
        <p className="description">[3] Задание. Необходимо реализовать классовый
          компонент, в котором будет отображена
          кнопка, первоначальное ее название - “Show”,
          при нажатии название меняется на “Hide”.
          При повторном нажатии название кнопки
          меняется на “Show” и тд.

        </p>
        <button onClick={this.handleClick}>{this.state.buttonText}</button>
      </div>
    )
  }
}

export default ToggleButton


