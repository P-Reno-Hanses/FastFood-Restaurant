import React from 'react'
import food from '../assets/food.jpg'

function Frontpage() {
  return (
    <>
    <section className="frontpage">
        <div className="frontpageWrapper">
            <div className="frontpageLeft">
                <div className="frontpageLeftItems">
                    <div className="frontpageLeftItem">
                        <h1 className='header'>The Weekly Bite</h1>
                        <h3 className="subheader">Delicious food for every mood</h3>
                        <button className='button frontButton'>ORDER NOW</button>
                    </div>
                </div>
            </div>
            <div className="frontpageRight">
                <div className="frontpageRightItems">
                    <div className="rightImage">
                        <img src={food} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Frontpage