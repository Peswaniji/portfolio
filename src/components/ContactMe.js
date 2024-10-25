import React, { useState } from 'react';

const ContactMe = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    return (
        <section id="contactme">
            <h1>Contact Me</h1>
            <form action="https://formspree.io/f/meoqongb" method="POST">
                <input 
                    type="text" 
                    name="name" 
                    placeholder="Your Name" 
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })} 
                    required 
                />
                <input 
                    type="email" 
                    name="email" 
                    placeholder="Your Email" 
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })} 
                    required 
                />
                <textarea 
                    name="message" 
                    placeholder="Your Message" 
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })} 
                    required 
                ></textarea>
                <button type="submit">Send</button>
            </form>
        </section>
    );
};

export default ContactMe;
