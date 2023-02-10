import React from 'react';
import './App.css'

function App() {
    return (
        <div className="app-wrapper">
            <header className={'header'}>
                <img src="https://png.pngtree.com/png-vector/20190223/ourmid/pngtree-holiday-summer-logo-png-image_711561.jpg" alt=""/>
            </header>
            <nav className={'nav'}>
                <div>Profile</div>
                <div>Messages</div>
                <div>News</div>
                <div>Music</div>
                <div>Settings</div>
            </nav>
            <div className={'content'}>
                <div>
                    <img src="https://w0.peakpx.com/wallpaper/551/932/HD-wallpaper-nature-supreme-lakes-mountains-reflections-nature.jpg" alt=""/>
                </div>
                <div>
                    ava + description
                </div>
                <div>
                    My posts
                    <div>New post</div>
                    <div>
                        <div>Post 1</div>
                        <div>Post 2</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
