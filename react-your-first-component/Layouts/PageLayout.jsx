import React from 'react'

// --- Nested Components ---

// Define Layouts with nesting component
export default function PageLayout({ children }) {
  return (
    <div className="page-layout-container">
      <NavigationHeader /> 
      <div className="content-wrapper">
        <MainContent>
          {children}
        </MainContent>
      </div>
      <Footer />
    </div>
  )
}

// Define navigation component
function NavigationHeader() {
  return (
    <header className="app-header">
      <div className="logo">
        <h1>Application Development</h1>
      </div>
      <nav className="main-nav">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
        </ul>
      </nav>
      <SearchBar />
    </header>
  )
}

// Define input component
function SearchBar() {
  return (
    <search className="search-bar">
      <input type="text" placeholder='Search here...' aria-label="Search" />
      <button>Search</button>
    </search>
  )
}

// Define content component
function MainContent({ children }) {
  return (
    <div className="main-content">
      <h2>Welcome to the Page!</h2>
      <p>This is the main area where all the unique content for this page resides.</p>
      {children}
    </div>
  )
}

// Define footer
function Footer() {
    return (
        <footer className="app-footer">
            <p>&copy; {new Date().getFullYear()} My App. All rights reserved.</p>
        </footer>
    )
}