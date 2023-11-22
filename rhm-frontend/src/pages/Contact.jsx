import {useState} from 'react'
import axios from 'axios'

const formEndpoint = import.meta.env.VITE_APP_WP_API_FORM_ENDPOINT

console.log(formEndpoint);

const ContactForm = () => {
    // state for from submission
    const [submitted, setSubmitted] = useState(false)
    const [error, setError] = useState(false)
    // set state for our input values
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        // object for our form - append data to it so we can send it
        const testForm = new FormData()
        testForm.append('your-name', name)
        testForm.append('your-email', email)
        testForm.append('your-message', message)

        // AXIOS CALL
        // first argument is the endpoint, second is the the form data:
        axios.post(formEndpoint, testForm, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        })
        .then((response) => {
            console.log(response)
            setSubmitted(true)
        })
        .catch((error) => {
            console.log(error);
            setError(true)
        })
    }

    // Conditionals - if Submitted or if Error
    if (submitted) {
        return (
            <>
                <h3>Thank you for your message!</h3>
                <p>We'll be in touch soon &#128513;</p>
            </>
        )
    }

    if (error) {
        return (
            <>
                <h3>Error!</h3>
                <p>Sorry, we were unable to send your message</p>
            </>
        )
    }

    // Form to be returned
    return (
        <>
            <form
                onSubmit={handleSubmit}
                method='POST'
            >
                {/* Name input */}
                <div>
                    {/* <label htmlFor='name'>Name</label> */}
                    <input
                        type="text"
                        name="name"
                        onChange={(event) => setName(event.target.value)}
                        value={name}
                        required
                        placeholder='Your name'
                    />
                </div>

                {/* Email input */}
                <div>
                    {/* <label htmlFor='email'>Email</label> */}
                    <input
                        type="email"
                        name="email"
                        onChange={(event) => setEmail(event.target.value)}
                        value={email}
                        required
                        placeholder='Your email'
                    />
                </div>

                {/* Message input */}
                <div>
                    {/* <label htmlFor='message'>Message</label> */}
                    <textarea
                        name="message"
                        onChange={(event) => setMessage(event.target.value)}
                        value={message}
                        required
                        placeholder='Your message'
                    />
                </div>

                <div>
                    <button
                        className='regular-button'
                        type="submit"
                    >
                        Send
                    </button>
                </div>

            </form>
        </>
    )
}

const Contact = () => {
  return (
    <>
        <div id='contact-container' className='container single-container'>
            <div>
                <h2>Get in Touch</h2>
                <ContactForm/>
            </div>
        </div>
    </>
  )
}

export default Contact