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
                            Name, M.E., Ph.D., Principal
                        </div>
                    </div>
                </div>

                {/* Convenors */}
                <div className="org-block">
                    <h4 className="org-title">Convenors</h4>
                    <div className="org-card">
                        <ul className="org-list">
                            <li>Name 1, M.E., Ph.D., Professor / ECE</li>
                            <li>Name 2, M.E., Ph.D., Professor & Head / MECH</li>
                            <li>Name 3, M.Tech., Ph.D., Professor / CSE</li>
                            <li>Name 4, M.E., Ph.D., Coordinator / S&H</li>
                        </ul>
                    </div>
                </div>

                {/* Advisory Committee */}
                <div className="org-block">
                    <h4 className="org-title">Advisory Committee</h4>
                    <div className="org-card">
                        <ul className="org-list">
                            <li>Name 5, HOD / ECE</li>
                            <li>Name 6, HOD / CSE</li>
                            <li>Name 7, HOD / EEE</li>
                            <li>Name 8, HOD / CIVIL</li>
                        </ul>
                    </div>
                </div>

                {/* Coordinators */}
                <div className="org-block">
                    <h4 className="org-title">Coordinators</h4>
                    <div className="org-card">
                        <ul className="org-list">
                            <li>Name 9, Assistant Professor / CSE</li>
                            <li>Name 10, Assistant Professor / ECE</li>
                            <li>Name 11, Assistant Professor / MEC</li>
                            <li>Name 12, Assistant Professor / EEE</li>
                        </ul>
                    </div>
                </div>

                {/* Members */}
                <div className="org-block">
                    <h4 className="org-title">Members</h4>
                    <div className="org-card">
                        <ul className="org-list">
                            <li>Name 13, Associate Professor / MECH</li>
                            <li>Name 14, Assistant Professor / EEE</li>
                            <li>Name 15, Assistant Professor / ECE</li>
                            <li>Name 16, Assistant Professor / CSE</li>
                            <li>Name 17, Assistant Professor / CIVIL</li>
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
