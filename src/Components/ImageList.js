import "./ImageList";
import React from "react";

const ImageList=(props)=>{
   const Imgs= props.Imageslist.map((image)=>{
    return (
        <figure key={image.id}>        
           <abbr title={image.description}><img  src={image.urls.regular} alt={image.description} width="800px" height="500px"/></abbr> 
            <p>Posted By {image.user.instagram_username}</p>
        </figure>
       )
    })
    return(
        <div>
            {Imgs}
        </div>
    )


}

export default ImageList;