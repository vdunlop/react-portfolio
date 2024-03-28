import { useState } from 'react';
import './style.css';

// Here we import a helper function that will check if the email is valid
import { validateEmail } from '../../utils/helpers';

function Form() {
  // Here we set state variables for name, email and message using `useState`
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Set the states according to what the user is typing in
    if (inputType === 'contact') {
        setContact(inputValue);
      } else if (inputType === 'email') {
        setEmail(inputValue);
      } else {
        setMessage(inputValue);
      }
    };
  
  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // Alert the user their first and last name, clear the inputs
    alert(`Hello ${contact} ${email} ${message}`);
 

  // Validate the inputs
  if (!validateEmail(email)) {setErrorMessage('Email is invalid'); return;
} else if (!contact) {setErrorMessage('Name required'); return;
} else if (!message) {setErrorMessage('Message required'); return;
}
   /* when do I want to clear these?
      // Alert the user their first and last name, clear the inputs
    alert(`Again Hello ${contact} ${email} ${message}`);
    setContact('');
    setEmail('');
    setMessage('');*/
  
};
  return (
    <div className="container text-center">
      <h1>
        Hello {contact} {email} {message}
      </h1>
      <form className="form" onSubmit={handleFormSubmit}>
        <input
          value={contact}
          name="contact"
          onChange={handleInputChange}
          type="text"
          placeholder="Contact Name"
        />
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="Email"
        />
        <input
        value={message}
        name="message"
        onChange={handleInputChange}
        type="text"
        placeholder=''
        />
        <button type="submit">
          Submit
        </button>
      </form>
      {errorMessage && (
        <div>
            <p className="error-text">{errorMessage}</p>
            </div>
      )}
    </div>
  )
};

export default Form;