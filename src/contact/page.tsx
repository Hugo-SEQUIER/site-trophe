
import './Contact.css'
import { useForm, ValidationError } from '@formspree/react';
import React, { useState, useEffect, useRef } from 'react';

export default function Contact(){

    const [state, handleSubmit] = useForm("******");
    const [submitting, handleSubmitting] = useState(false)
    const formRef = useRef<HTMLFormElement>(null); // Ajout de la référence au formulaire

    useEffect(() => {
        if (submitting) {
          const timer = setTimeout(() => {
            // Remettre l'état submitting à false après 5 secondes
            handleSubmitting(false); // Assurez-vous de gérer l'état correctement dans votre application
          }, 5000);
    
          // Nettoyer le timer si le composant se démonte
          return () => clearTimeout(timer);
        }

    }, [submitting]);

    useEffect(() => {
        window.scrollTo(0,0)
    },[])

    const delayedSubmit = () => {
        setTimeout(() => {
          handleSubmitting(true);
          if (formRef.current) {
            formRef.current.reset();
          }
        }, 1000);
    };

    return (
        <div className={"Form"}>
            <h1>Submit a request</h1>
            <form ref={formRef} onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className={"input"}
                    />
                    <ValidationError 
                        prefix="Name" 
                        field="name"
                        errors={state.errors}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className={"input"}
                    />
                    <ValidationError 
                        prefix="Email" 
                        field="email"
                        errors={state.errors}
                    />
                </div>
                <div>
                    <label htmlFor="company">Company</label>
                    <input
                        type="text"
                        id="company"
                        name="company"
                        required
                        className={"input"}
                    />
                    <ValidationError 
                        prefix="Company" 
                        field="company"
                        errors={state.errors}
                    />
                </div>
                <div>
                    <label htmlFor="issue">Please choose an issue below</label>
                    <select id="issue" name='issue' required className={"select"}>
                        <option value="" className={"select"}>-</option>
                        <option value="General Issues">General Issues</option>
                        <option value="Privacy">Privacy</option>
                        <option value="partenariat">Partenariat</option>
                        <option value="Developer Support">Developer Support</option>
                    </select>
                    <ValidationError 
                        prefix="Issue" 
                        field="issue"
                        errors={state.errors}
                    />
                </div>
                <div>
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        required
                        className={"message"}
                    />
                    <ValidationError 
                        prefix="Message" 
                        field="message"
                        errors={state.errors}
                    />
                </div>
                {/** 
                <div>
                    <label htmlFor="attachment">Attachment</label>
                    <input
                        type="file"
                        id="attachment"
                        name="attachment"
                        accept="image/png, image/jpeg, .pdf"
                    />
                    <ValidationError 
                        prefix="Attachment" 
                        field="attachment"
                        errors={state.errors}
                    />
                </div> */}
                <button type="submit" disabled={submitting} onClick={delayedSubmit}>Send</button>
            </form>
            {submitting && (
                <div  className={`${"widget"} ${state.succeeded ? "success" : ''}`}>
                    {state.succeeded ? (
                        <p>Form submission successful!</p>
                    ) : (
                        <p>There was an error submitting the form. Please try again.</p>
                    )}
                </div>
            )}
            
        </div>
    );
}