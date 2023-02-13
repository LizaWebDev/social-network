import React from "react";
import s from './Post.module.css';

const Post = () => {
    return (
        <div className={s.item}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3DPQ6DXrsrF5gB5-pC0ShwXDzeFy9blQHBw&usqp=CAU" alt=""/>
            Post 1
            <div>
                <span>like</span>
            </div>
        </div>
    );
}

export default Post;