import React from 'react';
import { Link } from 'react-router-dom';

class Menu extends React.Component{
    constructor(){
        super();
        this.state={}
    }

    render() {
        return(
            <div className='menu'>
                <Link to={'/'}><div> About </div></Link>
                <Link to={'/followers'}><div> Followers </div></Link>
                <Link to={'/following'}><div> Following </div></Link>
            </div>
        );
    }
}

export default Menu;