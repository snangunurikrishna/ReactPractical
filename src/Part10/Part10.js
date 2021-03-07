import { Component } from "react";
class Part10 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleChange = () => {
    this.setState(
      {
        count: 1,
      },
      () => {
        this.method1();
      }
    );
  };

  method1 = () => {
    console.log(this.state);
  };

  forceRerender = () => {
    this.forceUpdate();
  };
  render() {
    console.log("rendered succesfully.....");
    return (
      <>
        <button
          onClick={() => {
            this.handleChange();
          }}
        >
          UpdateState
        </button>

        <button
          onClick={() => {
            this.forceRerender();
          }}
        >
          Force Rerender
        </button>
      </>
    );
  }
}

export default Part10;
