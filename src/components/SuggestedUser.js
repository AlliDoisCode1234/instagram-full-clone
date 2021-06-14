import React from 'react'
import './SuggestedUser'
import Avatar from "@material-ui/core/Avatar"

const SuggestedUser = () => {
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
                <h4>Suggested User Username</h4>
                <span>Follows you</span>
            </div>
            <div className="suggestedUser__follow">
                <h4>Follow</h4>
            </div>
        </div>
    )
}

export default SuggestedUser
