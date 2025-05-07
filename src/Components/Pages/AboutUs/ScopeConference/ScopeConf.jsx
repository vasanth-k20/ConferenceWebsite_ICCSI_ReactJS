import React from 'react';
import './Scope.css'; 
import Avenue from '../../../Avenue/Avenue';

export default function ScopeOfConference() {
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
                        <h2 className="fw-bold display-5 text-uppercase text-light">Scope of Conference</h2>
                        <div className="divider mx-auto my-3"></div>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <section className="elementor-section">
                <div className="elementor-container">
                    <div className="elementor-widget-container">
                        <p>
                            The International Conference on Computer Science Innovations (ICCSI) is a global platform dedicated to
                            advancing research, innovation, and collaboration in the field of computer science. It brings together researchers,
                            academicians, and industry professionals to exchange ideas and present cutting-edge developments in areas such as
                            Artificial Intelligence, Machine Learning, Cybersecurity, Cloud Computing, Data Science, Internet of Things (IoT),
                            Blockchain, and Software Engineering. The conference also explores emerging fields like Quantum Computing, Augmented
                            Reality, Digital Twins, and Green Computing, addressing both theoretical advancements and real-world applications.
                        </p>
                        <p>
                            ICCSI provides an opportunity for participants
                            to engage in keynote sessions, technical paper presentations, panel discussions, and workshops
                            that foster meaningful discussions and collaborations. By bridging the gap between academia and industry,
                            the conference promotes innovative solutions to complex challenges in various sectors, including healthcare,
                            finance, smart cities, and business intelligence. With a strong emphasis on interdisciplinary research and
                            technological advancements, ICCSI serves as a catalyst for shaping the future of computing and driving
                            global digital transformation.
                        </p>
                    </div>
                </div>
            </section>

            <div>
                <Avenue />
            </div>

        </div>
    );
}
