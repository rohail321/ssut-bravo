import React from 'react'

export default function loader(props) {
    let loader;
    if(props.loading===true){
        loader=<div className="loader"></div>
        }
    return (
        <div>
            {loader}
        </div>
    )
}
