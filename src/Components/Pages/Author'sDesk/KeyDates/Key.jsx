import React from 'react';
import './Key.css';
import Avenue from '../../../Avenue/Avenue';

export default function KeyDates() {
    return (
        <div>
            {/* Background Image Section */}
            <div
                id="intro-example"
                className="img-fluid"
                style={{
                    height: '30vh',
                    width: '100%',
                    backgroundImage: 'url("/img/bannerauthor.webp")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="mask w-100 h-100 d-flex flex-column justify-content-center align-items-center">
                    <div className="text-white text-center px-3">
                        <h2 className="fw-bold display-5 text-uppercase text-light">Key Date</h2>
                        <div className="divider mx-auto my-3"></div>
                    </div>
                </div>
            </div>

            {/* Date Section */}
            <section className="important-dates-container">
                {/* Heading */}
                <h2 className="important-dates-heading">Important Dates</h2>

                {/* Row 1 */}
                <div className="important-date-row lavender-row">
                    <div className="date-title">Last Date for Full Paper Submission</div>
                    <div className="date-info">17-07-2025</div>
                </div>

                {/* Row 2 */}
                <div className="important-date-row lavender-row">
                    <div className="date-title">Notification of Paper Acceptance</div>
                    <div className="date-info">18-08-2025</div>
                </div>

                {/* Row 3 */}
                <div className="important-date-row lavender-row">
                    <div className="date-title">Camera Ready Paper Submission</div>
                    <div className="date-info">20-09-2025</div>
                </div>

                {/* Row 4 */}
                <div className="important-date-row lavender-row">
                    <div className="date-title">Last Date for Registration / Payment</div>
                    <div className="date-info">02-10-2025</div>
                </div>
            </section>
            <div>
                <Avenue/>
            </div>
        </div>
    );
}
