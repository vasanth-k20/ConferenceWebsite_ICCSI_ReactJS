import React, { useState } from 'react';
import './Invitees.css';

export default function Invitees() {
    const [activeFilter, setActiveFilter] = useState('all');

    const handleFilterClick = (filterValue) => {
        setActiveFilter(filterValue);
    };

    const portfolioItems = [
        { id: 1, category: 'key', imgSrc: '/img/key1.webp', title: 'Rajesh Kumar, University of Oxford, UK' },
        { id: 2, category: 'key', imgSrc: '/img/key2.webp', title: 'Priya Sharma, Indian Institute of Science, India' },
        { id: 3, category: 'chief', imgSrc: '/img/chi1.webp', title: 'Arjun Nair, Digital University Kerala, India' },
        { id: 4, category: 'chief', imgSrc: '/img/chi2.webp', title: 'Rohan Mehta, City University of London, UK' },
        { id: 5, category: 'chief', imgSrc: '/img/chi3.webp', title: 'Aarav Singh, University of Delhi, India' },
        { id: 6, category: 'chief', imgSrc: '/img/chi4.webp', title: 'Aditya Patel, National University of Singapore, Singapore' },
    ];

    return (
        <section className="portfolio-section" id="portfolio">
            <div className="portcontainer">
                <div className="portfolio-header">
                    <h3>
                        Take a Look at <span>Our Invitees</span>
                    </h3>
                </div>
                <div className="filter-section">
                    <h6></h6>
                    <ul className="filters">
                        {['all', 'key', 'chief'].map((filter) => (
                            <li key={filter}>
                                <span
                                    className={`filter ${activeFilter === filter ? 'active' : ''}`}
                                    onClick={() => handleFilterClick(filter)}
                                >
                                    {filter === 'all' ? 'All' : filter.charAt(0).toUpperCase() + filter.slice(1) + (filter === 'key' ? ' Invitees' : ' Patrons')}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div id="portfoliolist" className="portfolio-grid">
                    {portfolioItems
                        .filter((item) => activeFilter === 'all' || item.category === activeFilter)
                        .map((item) => (
                            <div
                                key={item.id}
                                className={`portfolio-item mix ${item.category}`}
                                style={{
                                    display: 'block',
                                    maxWidth: activeFilter === 'key' ? '400px' : '',
                                    margin: activeFilter === 'key' ? '0 auto' : '',
                                }}
                            >
                                <img src={item.imgSrc} alt={item.title} />
                                <div className="overlay">
                                    <h5>{item.title}</h5>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </section>
    );
}
