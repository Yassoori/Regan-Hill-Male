import {useState} from 'react'
import axios from 'axios'

const formEndpoint = import.meta.env.VITE_APP_WP_API_FORM_ENDPOINT

console.log(formEndpoint);

const ContactForm = () => {
    const [submitted, setSubmitted] = useState(false)
    const [error, setError] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        const testForm = new FormData()
        testForm.append('your-name', name)
        testForm.append('your-email', email)
        testForm.append('your-message', message)

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

    return (
        <>
            <form
                onSubmit={handleSubmit}
                method='POST'
            >
                <div>
                    <input
                        type="text"
                        name="name"
                        onChange={(event) => setName(event.target.value)}
                        value={name}
                        required
                        placeholder='Your name'
                    />
                </div>
                <div>
                    <input
                        type="email"
                        name="email"
                        onChange={(event) => setEmail(event.target.value)}
                        value={email}
                        required
                        placeholder='Your email'
                    />
                </div>
                <div>
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
            <div className='contact-container'>
                <h2 className='contact-heading'>Get in Touch</h2>
                <p className='contact-sub'>Interested in commissioning me to paint a mural, or be involved in any other project? Flick me a message about it and we can start from there.</p>
                <ContactForm/>
            </div>
        </div>
    </>
  )
}

export default Contact