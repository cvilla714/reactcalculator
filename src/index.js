import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

const nums = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];
const ops = ["/", "*", "-", "+", "="];

class App extends React.Component {
  handleClick = (e) => {
    console.log(e);
    console.log(e.target.innerText);
    const { innerText } = e.target;
    console.log(innerText);
    alert(innerText);
  };
  render() {
    return (
      <div className=" calculator">
        <div id="display" className="display">
          125
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
