import React, { Component } from 'react';
const styleObj={
    fontSIze:'72px',
    color:'blue'
        
}
class Inline extends Component {
    
    render() {
        return (
            <div>
                <h1 style={styleObj}>Inline Style...</h1>
            </div>
        );
    }
}

export default Inline;