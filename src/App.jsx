import React from "react";
import Heading from "./Header";
import Card from "./Cards";
import Sdata from "./Sdata";
import "./index.css"
function App(){
    return(
        <>
        <Heading/>
        <div className="con">
            <div className="cards">
         {Sdata.map((val)=>{
            return(
                <Card
            sname={val.sname}
            imgsrc={val.imgsrc}
            title={val.title}
            link={val.link}
            />
            );
         })}
         </div>
         </div>
        </>
    )
}
export default App;

