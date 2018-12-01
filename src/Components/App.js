import React from 'react';
import axios from "axios";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component{

  state={images:[]}
  
  onSearchSubmit= async (term)=>{
    const response= await axios
       .get("https://api.unsplash.com/search/photos",{
            params: {query : term},
            headers:{
                Authorization: "Client-ID 02231f22b458f98289c388e8b1fb33f6b9fe95405d5b5e7f38e1712729070f54"

            }
        })
        console.log(response.data.results)
        this.setState({images:response.data.results})
      
  }
  render(){
    return (    
         <div>
           <SearchBar submit={this.onSearchSubmit}/>
           <ImageList Imageslist={this.state.images}/>
           </div>
    )
    
  }
}



export default App;