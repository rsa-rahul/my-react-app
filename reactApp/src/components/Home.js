import React from 'react'
import { ReactComponent as ReactLogo } from './homeques.svg';
import { Link } from 'react-router-dom';
import '../App.css';

export const Home = () => {
    return (
        <div className='home1'>
            <div>
                <ReactLogo />
            </div>
            Are you good at guessing games?
            <div >
                <span>
                    <button type="submit">
                        <Link to={"/UsernameForm"}>Yes</Link>
                    </button>
                </span>
                <span>
                    <button type="submit">
                        <Link to={"/UsernameForm"}>I guess so</Link>
                    </button>
                </span>
            </div>
        </div>
    )
}
export default Home;
