import React from 'react'

// Export default for gallery component
export default function Gallery() { // <--- Defining default export
    return (
        <section>
            <h1>Amazing scientists</h1>
            <Profile />
            <Profile />
            <Profile />
        </section>
    )
}

// Export name for profile
function Profile() {
  return (
    <img
      src="https://i.imgur.com/MK3eW3As.jpg"
      alt="Katherine Johnson"
    />
  );
}

/**
 * Take note: 
 * A JSX file can only contain atleast one Default export
 * but can have multiple Name exports
 */