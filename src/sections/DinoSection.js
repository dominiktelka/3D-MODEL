import React, {useEffect, useState} from "react";
import styled from "styled-components";
import "../index.css"

const Section = styled.div`

`


const Title = styled.div`
    
`



export default function DinoGame() {
    const dino = document.getElementById("dino");
    const cactus = document.getElementById("cactus");
    const [isActive, setIsActive] = useState(false);

    useEffect(()=>{
        window.addEventListener("keydown",handleKeyDown);
        window.addEventListener("touchstart",handleKeyDown)
        return () =>{
            window.removeEventListener("keydown",handleKeyDown)
            window.addEventListener("touchstart",handleKeyDown)
        }
    },[])


    const handleKeyDown = event => {
        // 👇️ toggle isActive state on click

        setIsActive(true);
        setTimeout(()=>{setIsActive(false)},300)
    };



    return (
        <div className="game">
            <div className={`dino ${isActive ?"jump" : ''}`}></div>
            <div className="cactus"></div>
        </div>
    )
}