"use client";

// Import the useUserAuth hook
import { useUserAuth } from "./_utils/auth-context";
import { useEffect, useState } from "react";
import gitHubSignIn from "./_utils/auth-context.js";
import firebaseSignOut from "./_utils/auth-context.js";
 

export default async function Page() {
// Use the useUserAuth hook to get the user object and the login and logout functions
const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
 
// Sign in to Firebase with GitHub authentication
await gitHubSignIn();
 
// Sign out of Firebase
await firebaseSignOut();
 

return(
    <div>
        {/* Display some of the user's information8 */}
        <h1 className="text-3xl font-bold  text-gray-100">Shopping List App</h1>
        <p>
        { user ? (
            <div>
                <p>
                Welcome, {(user.displayName)}. You are logged with the email {user.email}. 
                </p>
                <button onClick={firebaseSignOut}>Sign out</button>
            </div>
        ) : (
            <button onClick={gitHubSignIn}>Sign in with GitHub</button>
        )}
        </p>

        
    </div>)
};