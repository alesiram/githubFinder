import React from 'react'
import { FaGithubAlt } from "react-icons/fa";


export default function UserCard({user}) {
  return (
    <>
    <div className="user-card">
          <img
            src={user.avatar_url}
            alt={user.name || data.login}
            className="avatar"
          />
          <h2>{user.name || user.login}</h2>
          <p className="bio">{user.bio || "No bio available."}</p>
          <a
            href={user.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="profile-btn"
          >
            <FaGithubAlt /> View GitHub Profile
          </a>
        </div>
    </>
  )
}
