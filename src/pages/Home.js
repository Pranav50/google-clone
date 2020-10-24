import React from 'react';
import { Link } from 'react-router-dom';
import AppsIcon from '@material-ui/icons/Apps'
import {Avatar, Button} from '@material-ui/core'
import google from '../img/google.png'
import './Home.css'
import Search from './Search';


const Home = () => {
    return (
        <div className="home">
            <div className="home_header">
                <div className="home_headerLeft">
                </div>
                <div className="home_headerRight">
                    <Link to='/gmail'>Gmail</Link>
                    <Link to='/images'>Images</Link>
                    <AppsIcon/>
                    <Avatar/>
                </div>

            </div>
            <div className="home_body">
                <img src={google} />
                <div className="home_inputContainer">
                    <Search />
                </div>
            </div>
        </div>
    );
};

export default Home;