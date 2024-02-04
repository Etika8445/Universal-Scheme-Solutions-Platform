import React from 'react'

export const Feedback = () => {
  return (
    <>
        <div className='contain-feedback'>
            <h1>Feedback</h1>
            <p>(Thank you for choosing "Schemes Made Easy", it is great pleasure to provide the best quality of Service. Please take a few moments to complete feedback form. Your honest feedback will help us to serve you better and enable us to work on improving our serivce standards.)</p>
            <form className='form-feedback'>
                <label>Full Name</label>
                <input type="text" required/>
                <label>Email Address </label>
                <input type="email" required/>
                <label>What features do you like most?</label>
                <textarea type='text'required/>
                <label>Would you recommend our websites to our colleagues or friends?</label>
                <textarea type='text'/>
                <label>Please share any other comments or suggestions.</label>
                <textarea type='text'/>
                <p></p><button className='button-contact'>Submit</button>
            </form>   
        </div>
    
    </>
  )
}
