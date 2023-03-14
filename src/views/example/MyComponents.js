import React from "react";

class MyComponent extends React.Component {
    state = {
        name: "eric",
        channel: "Hoi Dan IT"
    };
    handleClickButton = () => {
        alert('click me');
    }
    render() {
        let name = "eric";

        return (
            <>
                < div className="one" >
                    {console.log("Name: ", name)}
                    Chao Linh Sco Components. Name: {this.state.channel}
                </div >
                < div className="two" >
                    Chao Linh Sco Components. Name: {name}
                </div >
                < div className="three" >
                    <button onClick={() => this.handleClickButton()}>Click Me</button>
                </div >
            </>
        )
    }
}

export default MyComponent;