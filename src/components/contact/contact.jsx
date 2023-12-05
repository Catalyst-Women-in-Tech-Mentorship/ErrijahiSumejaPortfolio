import './contact.css';
import emailjs from "@emailjs/browser";
import { useRef, useState } from 'react';


const Contact = () =>{

    const formRef = useRef();
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    const sendEmail = (e) =>{
        e.preventDefault();

        emailjs.sendForm("service_vqocy9w", "template_0ej16kg", formRef.current, "da1SfFrBQjHTnHrIt").then(
        (result) => {
            setSuccess(true)
            formRef.current.reset(); 
            },
                (error) => {
                    setError(true);
                }
        );
    }

    return(
        <div
        className='contact'>
            <div className='textContainer3'>
                <h1>Let's work together</h1>
                <div className='item'>
                    <h2>Mail</h2>
                    <span>errijahi.sumeja.21@size.ba</span>
                </div>
                <div className='item'>
                    <h2>Phone</h2>
                    <span>+387 60 329 3018</span>
                </div>
            </div>
            <div className='formContainer'>
                <form ref={formRef} onSubmit={sendEmail} initial={{opacity: 0}}>
                    <input type="text" required placeholder='Name' name="name"/>
                    <input type="email" required placeholder='Email' name="email"/>
                    <textarea rows={8} placeholder='Message' name="message"/>
                    <button>Submit</button>
                    {error && "Error"}
                    {success && "Success"}
                </form>
            </div>
        </div>
    )
}

export default Contact