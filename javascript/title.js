'use strict'

export function changeHiddenAttribute(element){
    const isHidden = element.hidden;

    if(isHidden){
        element.hidden = false;
    }else{
        element.hidden = true;
    }
}