import React, {useEffect, useRef, useState} from "react";

import "../index.css"


export default function DinoGame() {

    const [isActive, setIsActive] = useState(false);
    const dinoRef = useRef(null)
    const cactusRef = useRef(null);
    const [score, setScore] = useState(0);
    const [isTouchEnabled, setIsTouchEnabled]=useState(false);


    useEffect(()=>{
        if(isTouchEnabled){

            window.addEventListener("touchstart",touch)
            const isAlive = setInterval(checkCollision, 10);

            return () =>{
                window.removeEventListener("touchstart",touch)
                clearInterval(isAlive);
            }
        }

    },[isTouchEnabled]);

    useEffect(()=>{
        window.addEventListener("keydown",handleKeyDown);
        const isAlive = setInterval(checkCollision, 10);

        return () =>{
            window.removeEventListener("keydown",handleKeyDown)
            clearInterval(isAlive);
        }
    })



    const handleKeyDown = (event) => {
    if(event.keyCode === 32){
        setIsActive(true);
        cactusRef.current.style.animation = `block 1s infinite linear`;
        setScore((prevScore) => prevScore +1);
        setTimeout(()=>{setIsActive(false)},300);
        }
    };

    const touch =(event) =>{
        setIsActive(true);
        cactusRef.current.style.animation = `block 1s infinite linear`;
        setScore((prevScore) => prevScore +1);
        setTimeout(()=>{setIsActive(false)},300);
    }

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
                    setIsTouchEnabled(false)
                }
            } else{
                // setScore((prevScore) => prevScore +0.1)
            }
        }
    };

    const handleTouchStart = () =>{
        setIsTouchEnabled(true)
    }

    return (
        <div className="game" onTouchStart={handleTouchStart}>
            <div className="score">Score: {score}</div>
            <div ref={dinoRef} className={`dino ${isActive ?"jump" : ''}`}></div>
            <div ref={cactusRef} className="cactus"></div>
        </div>
    )
}