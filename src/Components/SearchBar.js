import React from "react";

class Searchbar extends React.Component{
    /*constructor(props){
        super(props)
        
        this.onFormSubmit=this.onFormSubmit.bind(this)
    }*/
    state={term:""}
    
//to prevent default behaviour of form subit
    onFormSubmit=(event)=>{
        event.preventDefault();
        this.props.submit(this.state.term)
    
    }
   
    render(){
        return(
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label htmlFor="id1">You can search Images here:</label>
                        <input id="id1" type="text"
                        value={this.state.term}
                        onChange={event=>this.setState({term:event.target.value})} />
                    </div>  
                </form>
            </div>
        )
    }
}




export default Searchbar;