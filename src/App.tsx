import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Header Section */}
      <header className="header">
        <div className="logo">
          <h2>MyLogo</h2>
        </div>
        <nav className="nav-links">
          <a href="/">Home</a>
          <a href="/contact">Contact</a>
        </nav>
      </header>

      {/* Main Content Area with Sidebar */}
      <div className="main-container">
        {/* Sidebar */}
        <aside className="sidebar">
          <ul className="sidebar-links">
            <li><a href="/link1">Link 1</a></li>
            <li><a href="/link2">Link 2</a></li>
            <li><a href="/link3">Link 3</a></li>
          </ul>
        </aside>

        {/* Main Content */}
        <main className="content">
          <section className="dummy-content">
            <h1>Welcome to My Page</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;