import React from 'react';
import '../assets/css/header.css'
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';

interface headerProps{
    prop: String,
    name: string[],
    onEmit: (value: boolean) => void;
}
const Header: React.FC<headerProps> = ({ prop ,name, onEmit }) => {
   

    const loginForm = () => {
        // Emit the event to the parent
        navigate('/login');
        onEmit(true);
    };
    const navigate = useNavigate();
    
    return(
        <>
        <div className="container">
        <div className="logo">NOLAN</div>
        <div>
        
        <nav>
            <ul className="nav-links">
                <li><a href="#">About Us</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Features</a></li>
                <li><a href="#">New Project</a></li>
                <li><a href="#">Blog</a></li>
            </ul>
        </nav>
        </div>
        <Button label="Login"  className='login-btn' onClick={loginForm}  rounded />
        {/* <a href="#" className="login-btn">Log in</a>
        <div className="menu-toggle" id="mobile-menu">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
        </div> */}
        
    </div>

        </>
    );
};
export default Header