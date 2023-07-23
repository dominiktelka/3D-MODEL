import React from 'react';
import styled, {keyframes} from "styled-components"
import a15 from "../assets/Images/A15-Bionic.jpg"

const Section = styled.section`
  width:100vw;
  height:100vh;
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: var(--white);
  background-color: var(--dark);
  overflow: hidden;
`

const Title = styled.h1`
  width: 100%;
  text-align: center;
  position: absolute;
  bottom: 2rem;
  transform: rotate(-50%);
  font-size:var(--fontBig);
  font-family:var(--fontL);
  z-index: 1;
  background-image: linear-gradient(-90deg, var(--gradient));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media screen and (max-width: 70em) {
    font-size: var(--fontxxxl);
  }
  @media screen and (max-width: 64em) {
    font-size: var(--fontxxl);
  }
  @media screen and (max-width: 48em) {
    font-size: var(--fontxl);
  }
`

const glow = keyframes`
  0%{
    box-shadow: 1px 1px 10px var(--white);
  }
  50%{
    box-shadow: 2px 2px 25px var(--white)
  }
  100%{
    box-shadow: 1px 1px 10px var(--white)
  }
`

const Processor = styled.div`
width:25%;
  position: absolute;
  top: 50%;
  left:50%;
  transform: translate(-50%,-50%);
  animation: ${glow} 3s ease infinite;
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  
  
  img{
    width: 100%;
    height: auto;
  }

  //@media screen and (max-width: 48em) {
  //  display: none;
  //}
`

const Text = styled.div`
font-size: var(--fontxs);
  color: var(--greyLight);
  width:30%;
  height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  span{
    margin: 0.2rem 0;
    padding-left: 2rem;
    
  }
  
  @media screen and (max-width: 64em) {
    width: 50%;
  }
  @media screen and (max-width: 48em) {
    width: 100%;
    font-size: var(--fontxxs);
    span {
      width: 40%;
      padding-left: 1rem;
    }

    & > *:last-child {
      align-self: flex-end;
      padding-left: 0;
      padding-right: 1rem;
      text-align: right;
    }
  }
`

const ProcessorSection = () =>{


    return(
        <Section>
            <Title>Fastest Processor</Title>
            <Processor>
                <img src={a15} alt="A15 Processor"/>
            </Processor>
            <Text>
                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aperiam aspernatur ea exercitationem itaque iusto modi natus non quam quia, sunt tempore vel voluptates. Consectetur enim harum hic tempore veniam.
                </span>
                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, amet asperiores at cupiditate deserunt doloribus eveniet ex harum impedit laudantium minus nisi perspiciatis praesentium quaerat quos rem repudiandae totam unde.Aperiam dolor dolorem ducimus illo, impedit laboriosam libero magni minima nemo neque nesciunt odit reprehenderit sapiente, suscipit totam vel voluptate. Aliquid cupiditate debitis error inventore magni molestiae officiis reprehenderit similique.
                </span>
            </Text>
        </Section>
    )
}

export default ProcessorSection;