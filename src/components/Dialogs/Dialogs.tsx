import React from "react";
import {NavLink} from "react-router-dom";
import s from './Dialogs.module.css';

type DialogItemType = {
    id: number
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

    let dialogs = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrew'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valera'}
    ];

    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your it-kamasutra?'},
        {id: 3, message: 'Yo'}
    ];

    let dialogsElements = dialogs.map(d => <DialogItem id={d.id} name={d.name}/>);
    let messagesElements = messages.map(m => <Message message={m.message}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    );
}

export default Dialogs;