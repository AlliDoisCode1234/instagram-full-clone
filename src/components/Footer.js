import React, { useState } from 'react'
import './Footer.css'
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import AddSharpIcon from '@material-ui/icons/AddSharp';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Avatar from "@material-ui/core/Avatar"
import CloseIcon from '@material-ui/icons/Close';
import styled from 'styled-components';

const Footer = () => {
    const [open, setOpen] = useState(true);

    
    return (
        <div className="footer">
            
            <div className="footer__menu">
                <HomeIcon className="footer__menuItem" />
                <SearchIcon className="footer__menuItem" />
                <PlusIconContainer onClick={() => setOpen(true)}>
                    <AddSharpIcon className="footer__menuItem" />
                </PlusIconContainer>
                <ImageUploadToggle status={open}>
                    <CloseContainer status={open}>
                        <Close onClick={() => setOpen(false)} />
                    </CloseContainer>
                </ImageUploadToggle>
                
                
                <FavoriteBorderIcon className="footer__menuItem" />
                <Avatar 
                        className="footer__menuItem"
                        alt="JosiahJames"
                        src="/static/images/avatar/1/jpg"
                />
            </div>
        </div>
    )
}

export default Footer

const CloseContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    

`
const Close = styled(CloseIcon)`
    cursor: pointer;
    
    
`

const PlusIconContainer = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;

`

const ImageUploadToggle = styled.div`
    transform: ${props => props.status ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.2s ease-in;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    padding: 20px;


`