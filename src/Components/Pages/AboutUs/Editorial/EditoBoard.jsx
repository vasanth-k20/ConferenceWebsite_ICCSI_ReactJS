import React from 'react';
import './EditoBoard.css';  
import Avenue from '../../../Avenue/Avenue';

export default function EditorialBoard() {
    return (
        <div>
            {/* Background Image Section */}
            <div
                id="intro-example"
                className="img-fluid"
                style={{
                    height: '30vh',
                    width: '100%',
                    backgroundImage: 'url("/img/banner.webp")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="mask w-100 h-100 d-flex flex-column justify-content-center align-items-center">
                    <div className="text-white text-center px-3">
                        <h2 className="fw-bold display-5 text-uppercase text-light">Editorial Board</h2>
                        <div className="divider mx-auto my-3"></div>
                    </div>
                </div>
            </div>

            {/* Committee Section */}
            <div className="committee-container">
                {/* Section Heading */}
                <div className="committee-header">
                    <h3>Committee Members</h3>
                </div>

                {/* First Row with Two Members */}
                <div className="committee-row">
                    <div className="committee-card">
                        <strong>Name 1</strong>
                        <span>ASP / Mechanical Engg.</span>
                        <br />
                        Prince Mohammed Bin Fahd University,<br />
                        <em>Al Khobar, Saudi Arabia.</em>
                    </div>
                    <div className="committee-card">
                        <strong>Name 2</strong>
                        <span>ASP / Production Engg.</span>
                        <br />
                        National Institute of Technology,<br />
                        <em>Trichy.</em>
                    </div>
                </div>

                {/* Second Row with Two Members */}
                <div className="committee-row">
                    <div className="committee-card">
                        <strong>Name 3</strong>
                        <span>AP & Head / Mech</span>
                        <br />
                        National Institute of Technology,<br />
                        <em>Karaikal, UT of Puducherry.</em>
                    </div>
                    <div className="committee-card">
                        <strong>Name 4</strong>
                        <span>Manager</span>
                        <br />
                        Advanced Technology Products,<br />
                        <em>BHEL, Trichy.</em>
                    </div>
                </div>

                {/* Single Member at the Center */}
                <div className="committee-row">
                    <div className="committee-card large">
                        <strong>Name 5</strong>
                        <span>Professor</span>
                        <br />
                        Dept. of Environmental Science & Engg.,<br />
                        <em>Mersin University, Turkey.</em>
                    </div>
                </div>
            </div>

            <div>
                <Avenue/>
            </div>
        </div>
    );
}
