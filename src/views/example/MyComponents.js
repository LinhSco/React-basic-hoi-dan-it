import React from "react";

class MyComponent extends React.Component {
    state = {
        name: "eric",
        channel: "Hoi Dan IT"
    }
    render() {
        let name = "eric";

        return (
            <>
                < div >
                    {console.log("Name: ", name)}
                    Chao Linh Sco Components. Name: {this.state.channel}
                </div >
                < div >
                    {console.log("Name: ", name)}
                    Chao Linh Sco Components. Name: {name}
                </div >
            </>
        )
    }
}

export default MyComponent;