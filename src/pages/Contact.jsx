import React from 'react'
import Ngocard from '../components/Ngocard'

const Contact = () => {
  return (
    <>
    <div className='header-contact'>
      <h1>We'd love to Hear From You</h1>
      <h3>Whether you're curious about features , a free trail, or even press-we're ready to answer any and all queries</h3>
    </div>
    <div className='inquiries-contact'>
      <h1>Get in touch</h1>
      <p>If you have any inquiries, please feel free to drop us a message, and we will get in touch with you shortly. Your questions and concerns are important to us, and we are commited to providing prompt and helpful assistance. Thank you for reaching out.</p>
    </div>
    <form className='form-contact'>
      <label>Full Name</label>
      <input type="text" placeholder="Enter Name" required/>
      <label>Email Address </label>
      <input type="email" placeholder="Enter Email" required/>
      <label>Phone Number</label>
      <input type="phone number" placeholder="Enter Phone Number"/>
      <label>How may we help you?</label>
      <textarea type='text' required/>
      <p>*Less than 12hours, we will respond to your question </p>     
      <button className='button-contact'>Submit</button>
    </form> 
    <Ngocard/>
    </>
  )
}

export default Contact