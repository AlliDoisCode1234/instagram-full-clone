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
           <SuggestedUser username="LeonNoel" follow="Follows You"/>
           <SuggestedUser username="ElonMusk" follow="Follows You"/>
           <SuggestedUser username="BillGates" follow="Follows You"/>
           <SuggestedUser username="KanyeW" follow="Follows You"/>
           <SuggestedUser username="ClemenM" follow="Follows You"/>
    
            <div className="sidebar__footer">
                <div className="sidebar__footerMenu">
                    <li className="footer__link">About</li>
                    <li className="footer__link">Help</li>
                    <li className="footer__link">Press</li>
                    <li className="footer__link">API</li>
                    <li className="footer__link">Jobs</li>
                    <li className="footer__link">Privacy</li>
                    <li className="footer__link">Terms</li>
                    <li className="footer__link">Locations</li>
                </div>
                <div className="sidebar__footerSignature">
                    <span>© 2021 INSTAGRAM FROM FACEBOOK FAKE</span>
                </div>

            </div>


        </div>
    )
}

export default Sidebar
