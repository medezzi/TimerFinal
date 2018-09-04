import React from "react";
import Time from "./Time";
import Btn from "./Btn";
import SettingTime from "./SettingTime";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timeS: 50,
      timeM: 59,
      timeH: 23,
      S: "",
      M: "",
      H: "",
      decade: 0,
      toggleState: false,
      timeInit: 0
    };
    this.CounterMinutes = this.CounterMinutes.bind(this);
    this.CounterHours = this.CounterHours.bind(this);
    this.msToTime = this.msToTime.bind(this);
    setInterval(() => {
      this.setState({
        timeS: this.state.timeS + this.state.decade
      });
    }, 1000);
  }

  ToggleStart() {
    this.setState({ toggleState: !this.state.toggleState });
    this.setState({
      decade: 1,
      timeH: this.state.H,
      timeM: this.state.M,
      timeS: this.state.S
    });
    if (this.state.toggleState) this.Pause();
  }
  Pause() {
    this.setState({ toggleState: !this.state.toggleState });
    this.setState({ decade: 0 });
  }

  CounterMinutes() {
    this.setState({
      timeS: 0,
      timeM: this.state.timeM + this.state.decade
    });
  }

  CounterHours() {
    this.setState({
      timeM: 0,
      timeH: this.state.timeH + this.state.decade
    });
  }

  Reset() {
    this.setState({
      timeS: 0,
      timeM: 0,
      timeH: 0,
      decade: 0
    });
  }

  msToTime(event) {
    let ms = event.target.value;
    console.log(ms);
    const msPerSecond = 1000;
    const msPerMinute = msPerSecond * 60;
    const msPerHour = msPerMinute * 60;

    const hours = Math.floor(ms / msPerHour);
    const hoursRest = ms % msPerHour;
    const minutes = Math.floor(hoursRest / msPerMinute);
    const minutesRest = hoursRest % msPerMinute;
    const seconds = Math.floor(minutesRest / msPerSecond);
    console.log(this.state.timeH, this.state.timeM, this.state.timeS);
    this.setState({
      H: hours,
      M: minutes,
      S: seconds
    });
  }
  render() {
    if (this.state.timeS > 59) this.CounterMinutes();
    if (this.state.timeM > 59) this.CounterHours();
    if (this.state.timeH > 23) this.setState({ timeH: 0 });
    return (
      <div className="App">
        <div className="timer">
          <Time hms={this.state.timeH.toString().padStart(2, "0")} smh="Hour" />{" "}
          <h1>:</h1>
          <Time
            hms={this.state.timeM.toString().padStart(2, "0")}
            smh="Minutes"
          />{" "}
          <h1>:</h1>
          <Time
            hms={this.state.timeS.toString().padStart(2, "0")}
            smh="Seconds"
          />
        </div>
        <Btn
          type={this.state.toggleState ? "pause" : "Start"}
          action={this.ToggleStart.bind(this)}
        />
        <Btn type="Reset" action={this.Reset.bind(this)} />
        <SettingTime action={this.msToTime.bind(this)} />
      </div>
    );
  }
}
export default App;
