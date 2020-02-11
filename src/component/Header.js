import React from 'react';
import './Header.css';

const header = (props) => {
    return (
            <header>
                <div className="info">
                    <img className="profilepic" src="profileimage.png" alt="profile1" height="80px" width="auto" />
                    <div>
                        <p>User: Moustache Man</p>
                        <p>Balance: 1$</p>
                    </div>
                </div>
                <nav>
                    <ul>
                        <li>About Us</li>
                        <li>Statistics</li>
                        <li>Exchange Rates</li>
                    </ul>
                </nav>
            </header>    
    
    );
};

export default header;