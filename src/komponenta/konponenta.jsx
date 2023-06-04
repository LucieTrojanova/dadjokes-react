import React from 'react';
import { createRoot } from 'react-dom/client';
import { useState } from 'react';
import './komponenta.css';

export const Joke = (props) => {
  const { userAvatar, userName, text, likes, dislikes } = props;
  const [up, setUp] = useState(0);
  const [down, setDown] = useState(0);

  return (
    <div className="container">
      <div className="joke">
        <div className="joke__body">
          <div className="joke__user">
            <img className="user-avatar" src={userAvatar} />
            <p className="user-name">{userName}</p>
          </div>

          <p className="joke__text">{text}</p>
        </div>
        <div className="joke__likes">
          <button
            id="btn-up"
            className="btn-like btn-like--up"
            onClick={() => setUp(up + 1)}
          ></button>
          <span id="likes-up" className="likes-count likes-count--up">
            {up} {likes}
          </span>
          <button
            id="btn-down"
            className="btn-like btn-like--down"
            onClick={() => setDown(down + 1)}
          ></button>
          <span id="likes-down" className="likes-count likes-count--down">
            {down} {dislikes}
          </span>
        </div>
      </div>
    </div>
  );
};
