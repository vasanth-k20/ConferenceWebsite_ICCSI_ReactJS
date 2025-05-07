import React from 'react';
import './Comitee.css'; 
import Avenue from '../../../Avenue/Avenue';

export default function OrganizingCommittee() {
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
                        <h2 className="fw-bold display-5 text-uppercase text-light">Organizing Committee</h2>
                        <div className="divider mx-auto my-3"></div>
                    </div>
                </div>
            </div>

            {/* Organizing Committee Section */}
            <section className="org-section">
                {/* Chairman */}
                <div className="org-block">
                    <h4 className="org-title">Chairman</h4>
                    <div className="org-card">
                        <div className="org-body">
                            Dr. N. Anbazhaghan, M.E., Ph.D., Principal
                        </div>
                    </div>
                </div>

                {/* Convenors */}
                <div className="org-block">
                    <h4 className="org-title">Convenors</h4>
                    <div className="org-card">
                        <ul className="org-list">
                            <li>Dr. J. Joseph Ignatious, M.E., Ph.D., Professor / ECE</li>
                            <li>Dr. G. Perumal, M.E., Ph.D., Professor & Head / MECH</li>
                            <li>Dr. J.K. Jothi Kalpana, M.Tech., Ph.D., Professor / CSE</li>
                            <li>Dr. S. Shanmuga Sundaram, M.E., Ph.D., Coordinator / S&H</li>
                        </ul>
                    </div>
                </div>

                {/* Advisory Committee */}
                <div className="org-block">
                    <h4 className="org-title">Advisory Committee</h4>
                    <div className="org-card">
                        <ul className="org-list">
                            <li>Mr. G. Sadiq Basha, HOD / ECE</li>
                            <li>Mr. K. Ramesh, HOD / CSE</li>
                            <li>Mr. S. Manimaran, HOD / EEE</li>
                            <li>Mr. A. Kumar, HOD / CIVIL</li>
                        </ul>
                    </div>
                </div>

                {/* Coordinators */}
                <div className="org-block">
                    <h4 className="org-title">Coordinators</h4>
                    <div className="org-card">
                        <ul className="org-list">
                            <li>Mr. N. Gobinathan, Assistant Professor / CSE</li>
                            <li>Mr. P. Paruthillam Vazhuthi, Assistant Professor / ECE</li>
                            <li>Mr. N. Ejoumalae, Assistant Professor / MEC</li>
                            <li>Mr. R. Vimalprakash, Assistant Professor / EEE</li>
                        </ul>
                    </div>
                </div>

                {/* Members */}
                <div className="org-block">
                    <h4 className="org-title">Members</h4>
                    <div className="org-card">
                        <ul className="org-list">
                            <li>Mr. C. Subramaniyan, Associate Professor / MECH</li>
                            <li>Mr. B. Annadurai, Assistant Professor / EEE</li>
                            <li>Mrs. T. Priyadarshini, Assistant Professor / ECE</li>
                            <li>Mr. P. Dinesh Babu, Assistant Professor / CSE</li>
                            <li>Mrs. S. Sivapriya, Assistant Professor / CIVIL</li>
                        </ul>
                    </div>
                </div>
            </section>
            <div>
                <Avenue />
            </div>
        </div>
    );
}
