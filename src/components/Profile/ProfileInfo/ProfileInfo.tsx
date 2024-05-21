import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src="https://w0.peakpx.com/wallpaper/551/932/HD-wallpaper-nature-supreme-lakes-mountains-reflections-nature.jpg"
                    alt=""/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    );
}

export default ProfileInfo;