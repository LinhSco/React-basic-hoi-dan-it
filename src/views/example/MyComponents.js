import React from "react";

class MyComponent extends React.Component {
    state = {
        name: "eric",
        channel: "Hoi Dan IT"
    };
    handleOnChangeName = (event) => {
        this.setState(
            { name: event.target.value }
        )
    }
    handleClickButton = () => {
        alert('click me');
    }
    name = "eric";
    render() {
        return (
            <>
                < div className="one" >
                    {console.log("Name: ", name)}
                    Chao Linh Sco Components. Name: {this.state.channel}
                </div >
                < div className="two" >
                    <input value={this.state.name} type="text" onChange={(event) => this.handleOnChangeName(event)} ></input>
                    Chao Linh Sco Name: {this.state.name}
                </div >
                < div className="three" >
                    <button onClick={() => this.handleClickButton()}>Click Me</button>
                </div >
            </>
        )
    }
}

export default MyComponent;