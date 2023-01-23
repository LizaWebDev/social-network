import React from 'react';
import './App.css';

function App() {
    return (
        <div className="App">
            <Header/>
            <Technologies/>
        </div>
    );
}

const Header = () => {
    return (
        <div>
            <a href="#s">Home </a>
            <a href="#s">News Feed </a>
            <a href="#s">Messages</a>
        </div>
    );
}

const Technologies = () => {
    return (
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JS</li>
            <li>React</li>
        </ul>
    );
}

export default App;
