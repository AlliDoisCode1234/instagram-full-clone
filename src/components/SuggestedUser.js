import React from 'react'
import './SuggestedUser.css'
import Avatar from "@material-ui/core/Avatar"

const SuggestedUser = ({ username, follow }) => {
    return (
        <div className="suggestedUser">
            <div className="suggestedUser__image">
                <Avatar 
                    className="post__avatar"
                    alt="JosiahJames"
                    src="/static/images/avatar/1/jpg"
                />
            </div>
            <div className="suggestedUser__user">
                <h4>{username}</h4>
                <span>{follow}</span>
            </div>
            <div className="suggestedUser__follow">
                <h4>Follow</h4>
            </div>
        </div>
    )
}

export default SuggestedUser
