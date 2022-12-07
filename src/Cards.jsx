import React from "react";
function Card(props){
    return(
        <>
        
                <div className="card">
                    <div className="img">
                        <img src={props.imgsrc} alt="jdsfkj"/>
                    </div>
                    <div className="name">
                        <p>{props.sname}</p>
                    </div>
                    <div className="title">
                        <p>{props.title}</p>
                    </div>
                    <div className="btn">
                        <a href={props.title}>Watch Now</a>
                    </div>
                </div>

                
        </>
    )
}

export default Card;