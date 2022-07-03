import React from 'react';
import './App.css';


function App() {
  return (
    <div className="app-wrapper">
        <header className={'header'}>
            <img src="https://bcassetcdn.com/public/blog/wp-content/uploads/2019/07/18094848/kingfisher-2.png" alt=""/>
        </header>
        
        <nav className={'nav'}>
            <div>
                <a href="#s">Profile</a>
            </div>
            <div>
                <a href="#s">Messages</a>
            </div>
            <div>
                <a href="#s">News</a>
            </div>
            <div>
                <a href="#s">Music</a>
            </div>
            <div>
                <a href="#s">Settings</a>
            </div>
        </nav>
        
        <div className={"content"}>
            <div>
                <img src="https://production-wordpress.unep-wcmc.org/content//uploads/2022/01/AdobeStock_292804868-scaled.jpeg" alt=""/>
            </div>
            <div>
                ava + description
            </div>
            <div>
                My posts
                <div>New post</div>
                <div>Post 1</div>
                <div>Post 2</div>
            </div>
        </div>
    </div>
  );
}

export default App;
