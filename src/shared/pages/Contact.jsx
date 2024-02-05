import React from 'react'

const Contact = () => {
  return (
    <>
    <div className='header-contact'>
      <h1>We'd love to Hear From You</h1>
      <h3>Whether you're curious about features , a free trail, or even press-we're ready to answer any and all queries</h3>
    </div>
    <div className='inquiries-contact'>
      <h1>Get in touch</h1>
      <p>If you have any inquiries, please feel free to drop us a message, and we will get in touch with you shortly. Your questions and concerns are important to us, and we are commited to providing prompt and helpful assistance. Thank you for reaching out</p>
    </div>
    <div className='form-contact'>
      <p>Full Name</p>
      <input type="text" placeholder="Enter Name" />
      <p>Email Address </p>
      <input type="email" placeholder="Enter Email" />
      <p>Phone Number</p>
      <input type="phone number" placeholder="Enter Phone Number"/>
      <p>How may we help you?</p>
      <textarea placeholder='Help me understand how I can help you?'/>
    </div> 
    <p className='response-contact'>*Less than 12hours, we will respond to your question </p>     
    <button className='button-contact'>Submit</button>
    </>
  )
}

export default Contact