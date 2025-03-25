import React from 'react'
import './Avenue.css'

export default function Avenue() {
  return (
    // <!--avenue and contact-->
<section className="avenue" id="avenue">
    <div className="avenue-container">

        {/* Where and When Section */}
        <div className="event-details">
            <div className="event-detail-box">
                <div className="icon">
                    <i className="fas fa-map-marker-alt"></i>
                </div>
                <h4 className="detail-title">WHERE</h4>
                <p className="detail-info">
                    V.R.S. College of Engineering and Technology<br />
                    Arasur - 607 107<br />
                    Villupuram District
                </p>
            </div>

            <div className="event-detail-box">
                <div className="icon">
                    <i className="fas fa-calendar-alt"></i>
                </div>
                <h4 className="detail-title">WHEN</h4>
                <p className="detail-info">
                    26<sup>th</sup> April, 2024<br />
                    (Friday)
                </p>

                {/* Register Button */}
                <div className="register-button-container">
                    <a className="register-button" href="/papersub">Register</a>
                </div>
            </div>

            {/* Contact Details Section */}
            <div className="event-detail-box">
                <div className="contact-details">
                    <div className="icon">
                        <i className="fa-solid fa-address-card"></i>
                    </div>
                    <h4>CONTACT</h4>
                    <p><i className="fas fa-envelope"></i> Email: iccsiconfer@gmail.com</p>
                    <p><i className="fas fa-phone"></i> Phone: (226) 446 9731</p>
                    <p><i className="fas fa-map"></i> Address: 184 Main Collins Street, Las Vegas</p>
                </div>
            </div>
        </div>
    </div>
</section>

  )
}
