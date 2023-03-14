import React from "react";

class MyComponent extends React.Component {
    state = {
        fname: "",
        lname: ""
    }
    handleChangeFName = (event) => {
        this.setState(
            { fname: event.target.value }
        )
    }
    handleChangeLName = (event) => {
        this.setState(
            { lname: event.target.value }
        )
    }
    handleSubmit = (event) => {
        event.preventDefault()
        alert("clickme")
    }
    render() {
        return (
            <>
                <form>
                    <label htmlfor="fname">First name:</label><br />
                    <input type="text" value={this.state.fname} onChange={(event) => this.handleChangeFName(event)} /><br />
                    <label htmlfor="lname">Last name:</label><br />
                    <input type="text" value={this.state.lname} onChange={(event) => this.handleChangeLName(event)} /><br /><br />
                    <input type="submit" onClick={(event) => this.handleSubmit(event)} />
                </form>
            </>
        )
    }
}

export default MyComponent;