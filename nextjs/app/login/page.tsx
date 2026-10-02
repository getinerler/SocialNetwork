"use client";

import { FormEvent, useState } from 'react';
import styles from './login.module.css';

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setError("");

        try {
            const response = await fetch("http://localhost:5253/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username,
                    password,
                }),
            });

            if (!response.ok) {
                setError("Invalid username or password.");
                return;
            }

            const data = await response.json();

            localStorage.setItem("token", data.token);
            localStorage.setItem("user", JSON.stringify(data.user));

            // Redirect after successful login
            window.location.href = "/";
        } catch (error) {
            setError(error instanceof Error ? error.message : "An unexpected error occurred.");
        }
    }
    
    return (
    <>
      <div className={styles.loginContainer}>
        <h2 className={styles.formh2}>Login</h2>
        <form className={styles.formBody} onSubmit={handleSubmit}>
          <input className={styles.formInput} type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
          <input className={styles.formInput} type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
          <button className={styles.formButton} type="submit">Log In</button>
          <div className={styles.errorMessage}>{error}</div>
        </form>
      </div>
    </>
);


}
