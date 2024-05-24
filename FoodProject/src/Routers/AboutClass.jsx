import React from "react"

class AboutClass extends React.Component{
    constructor (props){
        super(props)
        console.log(props)

        this.state = {
            count: 0,
            count2: 1
        }
    }

    render(){
    return(
        <div className="user-card">
                <h1>Count: {this.state.count}</h1>
                <button onClick={()=> this.setState({
                    count: this.state.count + 1
                    })
                }>Increase</button>
                <h1>Count: {this.state.count2}</h1>
                <h2>Name: {this.props.name}</h2>
                <h3>Location: Bihar</h3>
                <h4>Contact: @subratanand</h4>
            </div>
    )
    }
}

export default AboutClass