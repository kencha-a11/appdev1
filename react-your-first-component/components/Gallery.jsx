import React from 'react'

// Defining gallery component
export default function Gallery() {
    return (
        <section>
            <h1>Amazing scientists</h1>
            <Profile />
            <Profile />
            <Profile />
        </section>
    )
}

// Define profile component inside this Gallery.jsx file
function Profile() {
    return (
        <div>
            <img
                src="https://i.imgur.com/MK3eW3Am.jpg"
                alt="Katherine Johnson"
            />
        </div>
    )
}
