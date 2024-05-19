import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div>
            <div>
                <img
                    src="https://w0.peakpx.com/wallpaper/551/932/HD-wallpaper-nature-supreme-lakes-mountains-reflections-nature.jpg"
                    alt=""/>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts/>
        </div>
    );
}

export default Profile;