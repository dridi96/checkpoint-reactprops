import React from "react";
import propTypes  from "prop-types";
function Profil(props) {
    
    return ( 
    <div >
        <p style={{color:"rgb(201, 187, 207)" ,fontWeight:"bolder", fontSize:"30px",}}>{props.fullname}</p>
        <div>{props.children}</div>
        <p >{props.profession}</p>
        <p >{props.bio}</p>
        <button className="btn btn-warning" onClick={()=>{props.handle(props.fullname)}}>user</button>
    </div>);
}
Profil.defaultProps ={
    fullname:'syrine'
}
Profil.propTypes={
    fullname:propTypes.string,
    bio:propTypes.string,
    profession:propTypes.string
}


export default Profil;