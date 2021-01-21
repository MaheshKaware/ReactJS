import React, { Component } from 'react';

class Form extends Component {
    constructor(props){
        super(props);
        this.state={
            userName:''
        }
    }

    handelUserNameChange=(event) =>{
        this.setState({
            userName:event.target.value
        })
    }

    handelSubmit = (event) =>{
        event.preventDefault();
        alert(`${this.state.userName}`)
        
    }

    render() {
        return (
            
            <form onSubmit={this.handelSubmit}>
                <div>
                    <label>Name</label>
                    <input type="text" value={this.state.userName} onChange={this.handelUserNameChange}></input>
                    <button type="submit">Submit</button>
                </div>

            </form>
            
        );
    }
}

export default Form;