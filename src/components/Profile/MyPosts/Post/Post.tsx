import React from "react";
import s from './Post.module.css';

type PostType = {
    message: string
    likesCount: number
}

const Post: React.FC<PostType> = (props) => {
    return (
        <div className={s.item}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3DPQ6DXrsrF5gB5-pC0ShwXDzeFy9blQHBw&usqp=CAU" alt=""/>
            {props.message}
            <div>
                <span>like {props.likesCount}</span>
            </div>
        </div>
    );
}

export default Post;