import React from 'react'
import '../party/Party.scss'
import { MessageComponent } from './Message/Message';

export const Party = () => {
    return (
        <div className="container__party">
            <div className="nav__party">
                <img className="avatar" src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/66/6652d8afc4ba9d5cb5dad78c405157d08d6923ef_full.jpg" alt="user"/>
                <h4>userName</h4>
                <img className="country" src="https://www.kindpng.com/picc/m/165-1654808_us-flag-png-round-transparent-png.png" alt="country"/>
            </div>
            <div className="message__party">
                <div className="message__nav">
                    {/* <img className="arrow" src={arrow} alt="back_arrow" /> */}
                    <svg className="arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30px"><path fill="#64689A" d="M3,4A1,1,0,0,0,2,5V19a1,1,0,0,0,2,0V5A1,1,0,0,0,3,4Zm18.92,7.62a1,1,0,0,0-.21-.33l-4-4a1,1,0,1,0-1.42,1.42L18.59,11H7a1,1,0,0,0,0,2H18.59l-2.3,2.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l4-4a1,1,0,0,0,.21-.33A1,1,0,0,0,21.92,11.62Z"/></svg>
                    <div className="many__users">
                        {/* <img src={user} alt="users" /> */}
                        <svg className="users" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30px"><path fill="#64689A" d="M15.71,12.71a6,6,0,1,0-7.42,0,10,10,0,0,0-6.22,8.18,1,1,0,0,0,2,.22,8,8,0,0,1,15.9,0,1,1,0,0,0,1,.89h.11a1,1,0,0,0,.88-1.1A10,10,0,0,0,15.71,12.71ZM12,12a4,4,0,1,1,4-4A4,4,0,0,1,12,12Z"/></svg>
                        <h4>438</h4>
                    </div>
                </div>
                <div className="message__content__general">
                <MessageComponent/>
                <MessageComponent/>
                <MessageComponent/>
                <MessageComponent/>
                <MessageComponent/>
                <MessageComponent/>
                <MessageComponent/>
                <MessageComponent/>
                <MessageComponent/>
                </div>
                <div className="searching__content">
                    <div className="message__content__search">
                    <input type="text" className="message"  placeholder="Write your message.." />
                    </div>
                    <div className="searching__content__botton">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30px"><path fill="#60639b" d="M22,9.67A1,1,0,0,0,21.14,9l-5.69-.83L12.9,3a1,1,0,0,0-1.8,0L8.55,8.16,2.86,9a1,1,0,0,0-.81.68,1,1,0,0,0,.25,1l4.13,4-1,5.68A1,1,0,0,0,6.9,21.44L12,18.77l5.1,2.67a.93.93,0,0,0,.46.12,1,1,0,0,0,.59-.19,1,1,0,0,0,.4-1l-1-5.68,4.13-4A1,1,0,0,0,22,9.67Zm-6.15,4a1,1,0,0,0-.29.88l.72,4.2-3.76-2a1.06,1.06,0,0,0-.94,0l-3.76,2,.72-4.2a1,1,0,0,0-.29-.88l-3-3,4.21-.61a1,1,0,0,0,.76-.55L12,5.7l1.88,3.82a1,1,0,0,0,.76.55l4.21.61Z"/></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30px"><path fill="#60639b" d="M12.43,4.1a1,1,0,0,0-1,.12L6.65,8H3A1,1,0,0,0,2,9v6a1,1,0,0,0,1,1H6.65l4.73,3.78A1,1,0,0,0,12,20a.91.91,0,0,0,.43-.1A1,1,0,0,0,13,19V5A1,1,0,0,0,12.43,4.1ZM11,16.92l-3.38-2.7A1,1,0,0,0,7,14H4V10H7a1,1,0,0,0,.62-.22L11,7.08ZM19.66,6.34a1,1,0,0,0-1.42,1.42,6,6,0,0,1-.38,8.84,1,1,0,0,0,.64,1.76,1,1,0,0,0,.64-.23,8,8,0,0,0,.52-11.79ZM16.83,9.17a1,1,0,1,0-1.42,1.42A2,2,0,0,1,16,12a2,2,0,0,1-.71,1.53,1,1,0,0,0-.13,1.41,1,1,0,0,0,1.41.12A4,4,0,0,0,18,12,4.06,4.06,0,0,0,16.83,9.17Z"/></svg>
                    <input type="range" name="" id="" />
                    {/* <button> */}
                    <div className="button__search">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30px"><path fill="#fff" d="M20.34,9.32l-14-7a3,3,0,0,0-4.08,3.9l2.4,5.37h0a1.06,1.06,0,0,1,0,.82l-2.4,5.37A3,3,0,0,0,5,22a3.14,3.14,0,0,0,1.35-.32l14-7a3,3,0,0,0,0-5.36Zm-.89,3.57-14,7a1,1,0,0,1-1.35-1.3l2.39-5.37A2,2,0,0,0,6.57,13h6.89a1,1,0,0,0,0-2H6.57a2,2,0,0,0-.08-.22L4.1,5.41a1,1,0,0,1,1.35-1.3l14,7a1,1,0,0,1,0,1.78Z"/></svg>
                    </div>
                    {/* </button> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
