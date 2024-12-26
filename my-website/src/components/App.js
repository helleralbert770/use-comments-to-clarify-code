import React from 'react';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Welcome to My React App</h1>
                <p>This is a sample application inspired by Brittany Chiang's portfolio.</p>
            </header>
            <main>
                <section>
                    <h2>About Me</h2>
                    <p>Here you can add information about yourself or your projects.</p>
                </section>
                <section>
                    <h2>Projects</h2>
                    <p>List your projects here with links and descriptions.</p>
                </section>
                <section>
                    <h2>Contact</h2>
                    <p>Provide your contact information or a contact form.</p>
                </section>
            </main>
            <footer>
                <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default App;