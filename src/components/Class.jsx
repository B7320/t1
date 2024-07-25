import React,{ Component } from 'react';
class Greeting extends Component{
   render(){
    
    const { name, message } = this.props;

    return (
        <div>
            <h1> {message},{name}</h1>
        </div>
    );
   }




}

export default Greeting;