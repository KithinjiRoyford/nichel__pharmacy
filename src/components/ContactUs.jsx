import { useState } from 'react';
import Navbar from './Navbar';

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all required fields.');
      return;
    }

    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3500);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="row justify-content-center mt-4" >
      <Navbar />
      <div className="col-md-6 card shadow p-4">
        <h2>Contact Us</h2>
        <p>Need help? Send us a message and we'll get back to you shortly.</p>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-control"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="subject" className="form-label">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="form-control"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject (optional)"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message *</label>
            <textarea
              id="message"
              name="message"
              className="form-control"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your message here"
              required
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary">Send Message</button>
          {submitted && (
            <div className="alert alert-success mt-3" role="alert">
              Thank you for contacting us. We will respond soon.
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
