import React from "react";

export const ChangeBackgroundImg = (state,image) =>{
    setTimeout(() => {
        state(image)
        
    }, 300);
}