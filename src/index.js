// import React from 'react'

import ReactDOM from 'react-dom';
import user from './user.json';
// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

function Profile({ avatar, name, tag, location, followers, views, likes }) {
  return (
    <div class="profile">
      <div class="description">
        <img src={avatar} alt={avatar} class="avatar" />
        <p class="name">{name}</p>
        <p class="tag">{tag}</p>
        <p class="location">{location}</p>
      </div>

      <ul class="stats">
        <li>
          <span class="label">Followers</span>
          <span class="quantity">{followers}</span>
        </li>
        <li>
          <span class="label">Views</span>
          <span class="quantity">{views}</span>
        </li>
        <li>
          <span class="label">Likes</span>
          <span class="quantity">{likes}</span>
        </li>
      </ul>
    </div>
  );
}

ReactDOM.render(
  <Profile
    avatar={user.avatar}
    name={user.name}
    tag={user.tag}
    location={user.location}
    followers={user.stats.followers}
    views={user.stats.views}
    likes={user.stats.likes}
  />,
  document.querySelector('#root'),
);
