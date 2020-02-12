import React from 'react'
import Sidebar from './Sidebar'
import Menu from './Menu'

class FollowCard extends React.Component {
    constructor(){
        super();
        this.state={};
    }

    render(){
        return(
            <div className='follow-card'>
                <img src={`${this.props.info.avatar_url}`} alt='follower pic'/>
                <p>{this.props.info.name}</p>
            </div>
        );
    }
}

export default FollowCard;