import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";

const nums = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];
const ops = ["/", "*", "-", "+", "="];

class App extends React.Component {
  state = {
    // lastPressed: undefined,
    currentNumber: "0",
    prevNumber: undefined,
    operation: undefined,
  };

  handleClick = (e) => {
    // console.log(e);
    // console.log(e.target.innerText);
    const { currentNumber, prevNumber, operation } = this.state;
    const { innerText } = e.target;
    // console.log(innerText);
    // alert(innerText);

    if (!Number.isNaN(Number(innerText))) {
      if (currentNumber === "0") {
        this.setState({
          currentNumber: innerText,
        });
      } else {
        this.setState({
          currentNumber: currentNumber + innerText,
        });
      }
    }
    switch (innerText) {
      case "AC": {
        this.setState({
          currentNumber: "0",
          prevNumber: undefined,
          operation: undefined,
        });
        break;
      }

      case ".": {
        if (!currentNumber.includes(".")) {
          this.setState({
            currentNumber: currentNumber + innerText,
          });
        }
        break;
      }
      default: {
        if (!operation) {
          this.setState({
            operation: innerText,
            prevNumber: currentNumber,
            currentNumber: "0",
          });
        } else {
          const evaluated = eval(`${prevNumber} ${operation} ${currentNumber}`);
          this.setState({
            operation: innerText,
            prevNumber: eval(),
            currentNumber: innerText === "=" ? evaluated : "0",
          });
        }
      }
    }

    this.setState({
      lastPressed: innerText,
    });
    // alert(innerText);
  };
  render() {
    const { currentNumber } = this.state;

    return (
      <div className=" calculator">
        <div id="display" className="display">
          {currentNumber}
        </div>
        <div className="nums-container">
          <button className="big-h light-grey ac" onClick={this.handleClick}>
            AC
          </button>
          {nums.map((num) => (
            <button className={`dark-grey ${num === 0 && `big-h`}`} key={num} onClick={this.handleClick}>
              {num}
            </button>
          ))}
          <button className="light-grey" onClick={this.handleClick}>
            .
          </button>
        </div>
        <div className="ops-container">
          {ops.map((op) => (
            <button className="orange" key={op} onClick={this.handleClick}>
              {op}
            </button>
          ))}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
