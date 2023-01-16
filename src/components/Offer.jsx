import React from 'react'

function Offer() {
  return (
    <>
    <section className="offer">
      <div className="offerWrapper">
        <div className="offerTop">
          <h1 className="offerHeader">What We Offer</h1>
          <p className="offerSubheader">Curious? Here are our most popular menu items.</p>
        </div>
        <div className="offerMid">
          <div className="offerItems">
            <div className="offerItem">
              <img src="https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80" alt="" />
              <h2 className="offerItemHeader">GOURMET BURGERS</h2>
            </div>
            <div className="offerItem">
              <img src="https://images.unsplash.com/photo-1598998834387-9b471483c82f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80" alt="" />
              <h2 className="offerItemHeader">CRAZY FRIES</h2>
            </div>
            <div className="offerItem">
              <img src="https://images.unsplash.com/photo-1562967916-eb82221dfb92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1286&q=80" alt="" />
              <h2 className="offerItemHeader">SUNDAY NUGGETS</h2>
            </div>
          </div>
        </div>
        <div className="offerBottom">
          <button className="button">VIEW FULL MENU</button>
        </div>
      </div>
    </section>
    </>
  )
}

export default Offer