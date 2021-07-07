import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import "./style.css"

function ContactForm() {
    const [state, handleSubmit] = useForm("xbjqkvbl");
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }
    return (
        <div>
            <form onSubmit={handleSubmit} id="form">
                <label htmlFor="email">
                    Email Address:
                </label>
                <input
                    id="email"
                    type="email"
                    name="email"
                />
                <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                />
                <br></br>
                <label>
                    Message:
                </label>
                <textarea
                    id="message"
                    name="message"
                />
                <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                />
                <button type="submit" disabled={state.submitting} id="submitBtn">
                    Submit
                </button>
            </form>
        </div>
    );
}

export default ContactForm;