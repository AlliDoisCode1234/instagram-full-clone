import React from 'react'
import '../components/Sidebar.css'
import SuggestedUser from './SuggestedUser'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar__headerContainer">
                <img src="" alt="" />
                <h3>Username</h3>
                <h4>User's name</h4>
                <span>Switch</span>
            </div>
           <div className="sidebar__suggestionsContainer">
               <h4>Suggestions For You</h4>
               <span>Follow</span>
               <SuggestedUser />
           </div>
            {/* sidebar__suggestionsContainer */}
                {/* Suggestions For You */}
                {/* See All Suggestions Link */}
                    {/* suggestedUser */}
                    {/* follow suggestedUser Link */}
            {/* Footer */}


        </div>
    )
}

export default Sidebar
