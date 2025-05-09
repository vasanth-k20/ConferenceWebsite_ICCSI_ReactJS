import React from 'react';
import './RegDetail.css'; 
import Avenue from '../../../Avenue/Avenue';

export default function RegistrationDetails() {
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
                        <h2 className="fw-bold display-5 text-uppercase text-light">Registration Details</h2>
                        <div className="divider mx-auto my-3"></div>
                    </div>
                </div>
            </div>

            {/* Payment Instructions Section */}
            <section className="payment-instructions-container">
                <div className="section-heading">
                    <h3>Payment Instructions</h3>
                </div>

                <div className="instructions-list">
                    <div className="instruction-item light-lavender">
                        Registration fee is payable only after your article is accepted.
                    </div>
                    <div className="instruction-item light-lavender">
                        Payment options: Online Transfer (NEFT / IMPS) or Cash Deposit.
                    </div>
                    <div className="instruction-item light-lavender">
                        After payment, send proof (Screenshot / Reference Number / Transaction ID or Counter Slip) along with your Paper ID.
                    </div>
                    <div className="instruction-item light-lavender">
                        At least one author of each accepted paper must register and attend the conference.
                    </div>
                    <div className="instruction-item light-lavender">
                        Selected paper abstracts will be published in the conference proceedings with ISBN.
                    </div>
                </div>

                {/* Bank Details Section */}
                <div className="section-heading">
                    <h3>Bank Details</h3>
                </div>

                <div className="bank-details">
                    <table>
                        <tbody>
                            <tr>
                                <td className="bankdetail-title">Account Name:</td>
                                <td className="bankdetail-info">
                                    International Conference on Computer Science and Information Technology.
                                </td>
                            </tr>
                            <tr>
                                <td className="bankdetail-title">Account Number:</td>
                                <td className="bankdetail-info">045100050302269</td>
                            </tr>
                            <tr>
                                <td className="bankdetail-title">Branch:</td>
                                <td className="bankdetail-info">Chennai</td>
                            </tr>
                            <tr>
                                <td className="bankdetail-title">IFSC Code:</td>
                                <td className="bankdetail-info">TMBL0000045</td>
                            </tr>
                            <tr>
                                <td className="bankdetail-title">MICR:</td>
                                <td className="bankdetail-info">605060005</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
            <div>
                <Avenue/>
            </div>
        </div>
    );
}
