import React from 'react'

function Footer() {
  return (
    <>
    <section className="footer">
        <div className="footerWrapper">
            <div className="footerOpeningInfo">
                <h2 className="infoHeader"> OPENING HOURS</h2>
                    <p className="footerInfoItem">Mon - Fri: 7am - 10pm</p>
                    <p className="footerInfoItem">Saturday: 9am - 10pm</p>
                    <p className="footerInfoItem">Mon - Fri: 9am - 8pm</p>
            </div>
            <div className="footerLocationInfo">
                <h3 className="infoHeader">LOCATION</h3>
                <p className="footerInfoItem">421 Totally-Real Street</p>
            </div>
            <div className="footerLinks">
                <div className="footerLink">Instagram</div>
                <div className="footerLink">Facebook</div>
                <div className="footerLink">Twitter</div>
            </div>
            <div className="footerMail">info@weeklybite.notarealmail.com</div>
        </div>
    </section>
    </>
  )
}

export default Footer