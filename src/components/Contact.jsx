'use client';

import { useState, useRef } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [honeypot, setHoneypot] = useState(''); // Bot detection
  const lastSubmitTime = useRef(0);

  // Input validation and sanitization
  const sanitizeInput = (input) => {
    return input.trim().replace(/[<>]/g, '');
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,9}$/;
    return phoneRegex.test(phone);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: sanitizeInput(value) });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Bot detection - honeypot field should be empty
    if (honeypot !== '') {
      console.warn('Bot detected');
      return;
    }

    // Rate limiting - prevent spam (minimum 5 seconds between submissions)
    const now = Date.now();
    if (now - lastSubmitTime.current < 5000) {
      alert('Please wait a moment before submitting again.');
      return;
    }

    // Validate inputs
    if (!validateEmail(formData.email)) {
      alert('Please enter a valid email address.');
      return;
    }

    if (!validatePhone(formData.phone)) {
      alert('Please enter a valid phone number.');
      return;
    }

    if (formData.name.length < 2 || formData.name.length > 100) {
      alert('Name must be between 2 and 100 characters.');
      return;
    }

    if (formData.message.length < 10 || formData.message.length > 1000) {
      alert('Message must be between 10 and 1000 characters.');
      return;
    }

    setIsSubmitting(true);
    lastSubmitTime.current = now;

    try {
      // Call our secure API route (not Google Apps Script directly)
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: sanitizeInput(formData.name),
          email: sanitizeInput(formData.email),
          phone: sanitizeInput(formData.phone),
          message: sanitizeInput(formData.message),
        }),
      });

      const result = await response.json();

      if (result.success) {
        alert('Message sent successfully! We\'ll get back to you soon.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
        });
      } else {
        throw new Error(result.message || 'Failed to send message');
      }
    } catch (error) {
      console.error('Contact form error:', error);
      alert('Failed to send message. Please try again later or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="contact-wrapper">
          <div className="contact-header">
            <h2 className="section-title">Let's Talk</h2>
            <p className="contact-text">
              Have a project in mind? We'd love to hear from you.
            </p>
            <div className="contact-details">
              <p>hello@coconet.com</p>
              <p>+1 (555) 123-4567</p>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            {/* Honeypot field - hidden from users, only bots will fill it */}
            <input
              type="text"
              name="website"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              style={{ display: 'none' }}
              tabIndex="-1"
              autoComplete="off"
            />

            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                maxLength="100"
                disabled={isSubmitting}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                maxLength="100"
                disabled={isSubmitting}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                maxLength="20"
                disabled={isSubmitting}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Message (minimum 10 characters)"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                maxLength="1000"
                disabled={isSubmitting}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
