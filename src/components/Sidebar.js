import React from 'react'
import '../components/Sidebar.css'
import SuggestedUser from './SuggestedUser'
import Avatar from "@material-ui/core/Avatar"


const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar__headerContainer">

                <Avatar 
                    className="post__avatar"
                    alt="JosiahJames"
                    src="/static/images/avatar/1/jpg"
                />
                <div className="sidebar__headerUsername">
                    <h3>josiahjames617</h3>
                    <h4>Josiah James</h4>
                </div>
                <div className="sidebar__switchUser">
                    <span>Switch</span>
                </div>
            </div>
           <div className="sidebar__suggestionsContainer">
               <h4>Suggestions For You</h4>
               <span>See All</span>
           </div>
           <SuggestedUser />
            
            {/* Footer */}


        </div>
    )
}

export default Sidebar
