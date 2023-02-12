import React from "react";
import s from './Profile.module.css';

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img
                    src="https://w0.peakpx.com/wallpaper/551/932/HD-wallpaper-nature-supreme-lakes-mountains-reflections-nature.jpg"
                    alt=""/>
            </div>
            <div>
                ava + description
            </div>
            <div className={s.posts}>
                My posts
                <div>New post</div>
                <div>
                    <div className={s.item}>Post 1</div>
                    <div className={s.item}>Post 2</div>
                </div>
            </div>
        </div>
    );
}

export default Profile;