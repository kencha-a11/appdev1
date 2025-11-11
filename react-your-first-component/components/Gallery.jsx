import React from 'react'

// --- Nesting Components ---

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
    const url = "https://i.imgur.com/MK3eW3Am.jpg"
    const alt = "Katherine Johnson"

    return (
        <div>
            <img
                src={url}
                alt={alt}
            />
        </div>
    )
}