import React from 'react';

import { Avatar } from '@mui/material';
import MessageIcon from '@mui/icons-material/Message';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import MoodIcon from '@mui/icons-material/Mood';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import SendIcon from '@mui/icons-material/Send';
import benzayed from '../assets/images/benzayed_n.jpg'


function ChatComponent(props) {
    return (
        <div className='chat'>
            <div className="chat_header">
                <div className="avatar_blok">
                    <Avatar src={benzayed}/>
                    <strong>Lazar Benzayed</strong>
                </div>
                <div className="buttons">
                    <div className="btn">
                        <SearchIcon/>
                    </div>
                    <div className="btn">
                        <MoreVertIcon/>
                    </div>
                </div>
            </div>
            <div className="chat_main">

            </div>
            <div className="chat_form">
                <div className="buttons">
                    <div className="btn"><MoodIcon/></div>
                    <div className="btn"><AttachFileIcon/></div>
                </div>

                <form action="" className="message">
                    <input type="text" placeholder="Taper un message"/>
                </form>

                <div className="buttons">
                    <div className="btn"><SendIcon/></div>
                </div>
            </div>
        </div>
    );
}

export default ChatComponent;