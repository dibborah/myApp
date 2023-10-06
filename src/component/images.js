import React from "react";
import {IndividualImage} from "./individualImage"
 
export const Images = ({images})=>{
    // console.log(images);
    return images.map((image)=>(
        <IndividualImage 
        key={image.id} 
        image = {image}/>
    ))
}