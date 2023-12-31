import React, {Suspense} from 'react'
import styled from 'styled-components'
import {Model4} from "../Components/Scene4";
import {Environment,OrbitControls} from "@react-three/drei";
import {Canvas} from "@react-three/fiber";
import DinoGame from "./DinoSection";

const Section =  styled.section`
  width: 100vw;
  height: 100vh;
  position: relative;
  display:flex;
  justify-content: flex-end;
  align-items: center;
  background-color: var(--dark);
  overflow: hidden;
  align-content: center;
  z-index: 1;
`
const Title = styled.h1`
  position:absolute;
  margin: 0 auto;
  top: 5rem;
  left: 50%;
  transform: translate(-50%,0);
  font-size:var(--fontlg);
  font-family: var(--fontL);
  color: var(--greyLight);
  
  @media screen and (max-width: 40em){
    top:0;
    margin:0 auto;
    text-align: center;
  }
  
`

const InteractionSection = () =>{


    return(
        <Section>
            <Title>Simple example of how html works inside 3d model</Title>
            <Canvas camera={{fov:6, position:[0,0,-15]}}>
                <ambientLight intensity={2.25}/>
                <directionalLight intensity={0.4}/>
                <Suspense fallback={null}>
                    <Model4 />
                </Suspense>
                <Environment preset="warehouse" />
                {/*<OrbitControls enableZoom={true} minPolarAngle={Math.PI / 2.2} maxPolarAngle={Math.PI / 2.2} />*/}
                <DinoGame/>
            </Canvas>

        </Section>
    )
}

export default InteractionSection;