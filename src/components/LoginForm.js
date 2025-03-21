import React, { useState, useEffect, createContext } from 'react';
import AuthMessage from './AuthMessage';

// Creating the Context
export const AuthContext = createContext(null);

const LoginForm = () => {
    const [username, setUsername] = useState('');       // State for usernames
    const [password, setPassword] = useState('');       // State for passwords
    const [message, setMessage] = useState('');         // State for display messages
    const [validUser, setValidUser] = useState(false);  // Tracks if the user is valid or not.
    const [submitted, setSubmitted] = useState(false);  // Track submission, so that user must press login again 
                                                        // to display messages rather than automatically

    // Takes in the input from username and password
    const handleInput = (e) => {
        const { name, value } = e.target;
        if (name === 'username') {
            setUsername(value);
        } else if (name === 'password') {
            setPassword(value);
        }
    };

    const validateInput = () => {
        // Checks if the user have inputted both a username and password
        if (!username || !password) {
            setMessage('Username and Password are required.');
            setValidUser(false);
            return false;
        }
        // Checks if the user have inputted a password that is atleast 8 characters long
        if (password.length < 8) {
            setMessage('Password must be at least 8 characters long');
            setValidUser(false);
            return false;
        }

        return true;
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();  
        if (validateInput()) {
            setSubmitted(true); // Calls the fetch and validation function
        }
    };

    // useEffect to fetch data from API and compares to see if inputted username and password matches
    // and redirect accordingly or display invalid messages
    useEffect(() => {
        if (submitted) {
            const fetchData = async () => {
                try {
                    const response = await fetch('https://jsonplaceholder.typicode.com/users');
                    const users = await response.json();
                    const foundUser = users.find(user => user.username === username && user.email === password);

                    if (foundUser) {
                        setMessage('Login successful! Redirecting...');
                        setValidUser(true);  // Mark the user as valid
                    } else {
                        setMessage('Invalid username or password!');
                        setValidUser(false);
                    }
                } catch (error) {
                    setMessage('Failed to fetch user data!');
                    setValidUser(false);
                } finally {
                    setSubmitted(false);  // Reset submitted state after API call
                }
            };

            fetchData();
        }
    }, [submitted]);

    // useEffect for redirecting after successful login
    useEffect(() => {
        if (validUser) {
            setTimeout(() => { window.location.href = '/courses'; }, 2000);  // Wait 2 seconds before redirecting
        }
    }, [validUser]); 

    return (
        //Providing the context Value
        <AuthContext.Provider value = {{username, password, message, validUser}}> 
            <main className="login">
                <h2>LMS Login</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" onChange={handleInput} value={username} /> <br />

                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" onChange={handleInput} value={password} /><br />

                    <button type="submit">Login</button><br />
                    <a href="#" className="forgot-password">Forgot Password?</a>
                </form>
                <AuthMessage />
            </main>
        </AuthContext.Provider>
    );
};

export default LoginForm;