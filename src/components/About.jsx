import React from 'react'
import Food from '../assets/food2.jpg'

function About() {
  return (
    <>
     <section className="about">
        <div className="aboutWrapper">
            <div className="leftItems">
                <img src={Food} alt="" />
            </div>
            <div className="rightItems">
               <div className="info">
                <h1 className="aboutHeader">All About TWB</h1>
                <p className="aboutDesc">We have been serving irresistible comfort food since 1998. Our mission is to keep you smiling with every bite. </p>
                <p className="aboutDesc">Treat yourself to a feel-good meal today!</p>
                <button className="aboutButton">LEARN MORE</button>
               </div>
            </div>
        </div>
     </section>
    </>
  )
}

export default About