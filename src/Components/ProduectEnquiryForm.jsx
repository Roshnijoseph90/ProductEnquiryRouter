import React ,{useState}from 'react'
import { Form, Link } from 'react-router-dom'

const ProduectEnquiryForm = () => {
  const [submitted, setSubmitted] = useState(false);  // State to track form submission
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handlechange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();  
console.log('Product Enquiry Submitted:', formData);
   setSubmitted(true); 
  };


  return (
    <div className="product-inquiry-form">
      {submitted ? (
        <div className="thank-you-message" >
          <h3 >Thank you for your inquiry! We will get back to you soon.</h3>
          <Link to="/productenquiryform" className="btn btn-primary mt-3">Back to Home</Link>

        </div>
      ) : (
        <Form onSubmit={handleSubmit}>
          <h2>Product Inquiry</h2>

          {/* Name Field */}
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input 
              type="text" 
              name="name" 
              id="name" 
              className="form-control" 
              required 
              placeholder="Enter your name"
            />
          </div>

          {/* Phone Field */}
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">
              Phone Number:
            </label>
            <input 
              type="tel" 
              name="phone" 
              id="phone" 
              className="form-control" 
             required
              placeholder="Enter your phone number" 

            />
          </div>

          {/* Email Field */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input 
              type="email" 
              name="email" 
              id="email" 
              className="form-control" 
              required 
              placeholder="Enter your email"
            />
          </div>

          {/* Message Field */}
          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Message:
            </label>
            <textarea 
              name="message" 
              id="message" 
              className="form-control" 
              rows="4" 
              required 
              placeholder="Enter your message"
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-primary">
            Submit Inquiry
          </button>
        </Form>
      )}
    </div>
  )
}



export default ProduectEnquiryForm
