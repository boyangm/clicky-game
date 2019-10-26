import React from 'react'

const Card = (props) =>{
    return (
        <div onClick = {() =>props.trail(props.value)}  className= 'cardCont'>
            <img src = {props.image}></img>
        </div>
    )
}
export default Card