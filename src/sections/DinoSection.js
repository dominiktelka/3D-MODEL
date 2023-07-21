import React, {useEffect, useRef, useState} from "react";
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
    const dinoRef = useRef(null)
    const cactusRef = useRef(null);
    const [score, setScore] = useState(0);


    useEffect(()=>{
        window.addEventListener("keydown",handleKeyDown);
        window.addEventListener("touchstart",handleKeyDown)

        const isAlive = setInterval(checkCollision, 10);

        return () =>{
            window.removeEventListener("keydown",handleKeyDown)
            window.addEventListener("touchstart",handleKeyDown)
            clearInterval(isAlive);
        }
    },[]);



    const handleKeyDown = event => {
        setIsActive(true);
        cactusRef.current.style.animation = `block 1s infinite linear`
        setScore((prevScore) => prevScore +1)
            setTimeout(()=>{setIsActive(false)},300)
    };

    const checkCollision = () => {
        if (dinoRef.current && cactusRef.current) {

            //here we are taking position of dino and cactus
            const dinoTop = parseInt(
                window.getComputedStyle(dinoRef.current).getPropertyValue("top")
            );
            const cactusLeft = parseInt(
                window.getComputedStyle(cactusRef.current).getPropertyValue("left")
            );
            

            if (cactusLeft < 45 && cactusLeft > 0 && dinoTop >= 140) {
                alert("Game over")

                if (cactusRef.current && dinoRef.current) {
                    cactusRef.current.style.animation = 'none';
                    setScore(0)
                }
            } else{
                // setScore((prevScore) => prevScore +0.1)
            }
        }
    };


    return (
        <div className="game">
            <div className="score">Score: {score}</div>
            <div ref={dinoRef} className={`dino ${isActive ?"jump" : ''}`}></div>
            <div ref={cactusRef} className="cactus"></div>
        </div>
    )
}