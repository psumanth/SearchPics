import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';

class Search extends React.Component{
    render(){
        return(
            //Adding css directly using style
            <div className="ui container" style={{marginTop: "20px"}}>
                <App/>
            </div>
        )
    }
}


ReactDOM.render(<Search />, document.getElementById('root'));


