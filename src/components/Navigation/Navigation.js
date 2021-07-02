import React, {useState} from 'react';
import {
    BrowserRouter as Router,
    Link,
  } from 'react-router-dom';
  import './Navbar.css';

const Navigation = ({onRouteChange, isSignedIn}) => {
    const [isMobile, setIsMobile] = useState(false);
        if (isSignedIn){
            
            return(
                <nav className='navbar'>
                    <h3 className="logo">Features</h3>
                    <div className={isMobile? 'nav-links-mobile':'nav-links'}>
                    <Router>
                        <Link to="/">
                            <p onClick={() => onRouteChange('home')} className='f3 link dim black underline pa3 pointer'>Home</p>
                        </Link>
                        <Link to="/">
                            <p onClick={() => onRouteChange('Home')} className='f3 link dim black underline pa3 pointer'>Face Recognition</p>
                        </Link>
                        <Link to="/colaborate">
                            <p onClick={() => onRouteChange('colaborate')} className='f3 link dim black underline pa3 pointer'>Colaborate</p>
                        </Link>
                        <Link to="/">
                            <p onClick={() => onRouteChange('codepen')} className='f3 link dim black underline pa3 pointer'>Codepen</p>
                        </Link>
                        <Link to="/">
                            <p onClick={() => onRouteChange('vedio')} className='f3 link dim black underline pa3 pointer'>Vedio Call</p>
                        </Link>
                        <Link to="/">
                            <p onClick={() => onRouteChange('signout')} className='f3 link dim black underline pa3 pointer'>Sign out</p>
                        </Link>
                    </Router>
                    </div>
                    <button className='mobile-menu-item
                    '
                    onClick={()=> setIsMobile(!isMobile)}
                    >
                        {isMobile? (
                        <i className='fas fa-times'></i>
                        ):(
                        <i className='fas fa-bars'></i>
                        )}
                    </button>
                </nav>
            );
        }else{
            return(
                <nav className='navbar'>
                    <h3 className="logo">Features</h3>
                    <div  className={isMobile? 'nav-links-mobile':'nav-links'}>
                        <p onClick={() => onRouteChange('signin')} className='f3 link dim black underline pa3 pointer'>Sign In</p>
                        <p onClick={() => onRouteChange('register')} className='f3 link dim black underline pa3 pointer'>Register</p>
                    </div>
                    <button className='mobile-menu-item
                    '
                    onClick={()=> setIsMobile(!isMobile)}
                    >
                        {isMobile? (
                        <i className='fas fa-times'></i>
                        ):(
                        <i className='fas fa-bars'></i>
                        )}
                    </button>
                </nav>
            );
        }
            
        
}

export default Navigation;
