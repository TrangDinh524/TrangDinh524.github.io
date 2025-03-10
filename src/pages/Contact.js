import React, { useState } from 'react';
import '../App.css';
import emailjs from 'emailjs-com';


function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here, such as sending the data to an API
        console.log('Form submitted:', formData);

        emailjs.send('trang_personalweb', 'template_qsd7asm', formData, 'Xxzdoq1XUDDRZbxm9')
        .then((response) => {
            console.log('Success!', response.status, response.text);
            // Optionally reset the form or show a success message here
            alert('Your message has been sent! I will reply as soon as possible. Thank you for your patience!');
        })
        .catch((error) => {
            console.error('Error sending email:', error);
            alert('Failed to submit form. Please try again later.');
        });
    };

    return (
        <section data-aos="fade-up" className="contact" id="contact">
            <h2 className="section-title">Contact</h2>
            <span className="section-subtitle">Get in touch</span>

            <div className="contact-container container grid">
                <div className="contact-items">
                    <div className="contact-information">
                        <i className="fas fa-phone contact-icon"></i>
                        <div>
                            <h3 className="contact-title">Call Me</h3>
                            <span className="contact-subtitle">+65 90567614</span>
                        </div>
                    </div>
                    <div className="contact-information">
                        <i className="far fa-envelope contact-icon"></i>
                        <div>
                            <h3 className="contact-title">Email</h3>
                            <span className="contact-subtitle"><a href="mailto:dinhtrang.5204@gmail.com">dinhtrang.5204@gmail.com</a></span>
                        </div>
                    </div>
                    <div className="contact-information">
                        <i className="fas fa-map-marker-alt contact-icon"></i>
                        <div>
                            <h3 className="contact-title">Location</h3>
                            <span className="contact-subtitle">Singapore</span>
                        </div>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="contact-form grid" id="contact-form">
                    <div className="contact-inputs grid">
                        <div className="contact-content">
                            <label htmlFor="name" className="contact-label">Name</label>
                            <input 
                                type="text" 
                                className="contact-input" 
                                name="name" 
                                required 
                                placeholder="Enter your name" 
                                value={formData.name} 
                                onChange={handleChange} 
                            />
                        </div>
                        <div className="contact-content">
                            <label htmlFor="email" className="contact-label">Email</label>
                            <input 
                                type="email" 
                                className="contact-input" 
                                name="email" 
                                required 
                                placeholder="Enter your email" 
                                value={formData.email} 
                                onChange={handleChange} 
                            />
                        </div>
                    </div>
                    <div className="grid">
                        <div className="contact-content">
                            <label htmlFor="subject" className="contact-label">Subject</label>
                            <input 
                                type="text" 
                                className="contact-input" 
                                name="subject" 
                                required 
                                placeholder="Enter your subject" 
                                value={formData.subject} 
                                onChange={handleChange} 
                            />
                        </div>
                        <div className="contact-content">
                            <label htmlFor="message" className="contact-label">Message</label>
                            <textarea 
                                style={{ resize: 'none' }} 
                                rows="5" 
                                className="contact-input" 
                                name="message" 
                                required 
                                placeholder="Enter your message" 
                                value={formData.message} 
                                onChange={handleChange} 
                            ></textarea>
                        </div>
                        <p className="contact__message" id="contact-message"></p>
                    </div>
                    <div className="contact-button">
                        <button type="submit" className="btn-container btn-effect">
                            Send Message <i className="fab fa-telegram-plane button-icon"></i>
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Contact;