import React from 'react'
import './AbtConf.css';
import Avenue from '../../../Avenue/Avenue';

export default function AboutConference() {
    return (
        <>
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
                        <h2 className="fw-bold display-5 text-uppercase text-light">About the Conference</h2>
                        <div className="divider mx-auto my-3"></div>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <section className="elementor-section">
                <div className="elementor-container">
                    <div className="elementor-widget-container">
                        <p>
                            The International Conference on Computer Science Innovations (ICCSI) is a premier global platform dedicated to showcasing
                            cutting-edge research, groundbreaking technologies, and emerging trends in computer science. ICCSI brings together
                            researchers, academicians, industry professionals, and students from around the world to share knowledge,
                            foster collaboration, and explore the future of computing.
                        </p>
                        <p>
                            The conference covers a wide range of topics, including artificial intelligence, machine learning, cybersecurity,
                            cloud computing, data science, IoT, blockchain, and software engineering. ICCSI provides an opportunity for participants
                            to present their latest research, network with leading experts, and engage in insightful discussions that drive innovation
                            in the field.
                        </p>
                        <p>
                            With keynote sessions from renowned speakers, technical paper presentations, workshops, and panel discussions, ICCSI
                            serves as a dynamic forum for advancing the frontiers of computer science and its real-world applications.
                        </p>
                    </div>
                </div>
            </section>

            <div>
                <Avenue />
            </div>
        </>
    )
}
