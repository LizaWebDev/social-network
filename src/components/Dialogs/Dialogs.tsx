import React from "react";
import {NavLink} from "react-router-dom";
import s from './Dialogs.module.css';

type DialogItemType = {
    id: string
    name: string
}

const DialogItem: React.FC<DialogItemType> = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog}>
            <NavLink to={path} activeClassName={s.active}>{props.name}</NavLink>
        </div>
    );
}

type MessageType = {
    message: string
}

const Message: React.FC<MessageType> = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    );
}


const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem id="1" name={"Dimych"}/>
                <DialogItem id="2" name={"Andrey"}/>
                <DialogItem id="3" name={"Sveta"}/>
                <DialogItem id="4" name={"Sasha"}/>
                <DialogItem id="5" name={"Viktor"}/>
                <DialogItem id="6" name={"Valera"}/>
            </div>
            <div className={s.messages}>
                <Message message={"Hi"}/>
                <Message message={"How is your it-kamasutra?"}/>
                <Message message={"Yo"}/>
            </div>
        </div>
    );
}

export default Dialogs;