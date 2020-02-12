import React from 'react'

class Sidebar extends React.Component{
    constructor(){
        super();
        this.state={};
    }

    render(){
        return(
            <div className='sidebar'>
                {console.log(this.props)}
                <img src={`${this.props.profilePic}`} alt='user-avatar' />
                <a href={`${this.props.link}`}><div className='username'>{`${this.props.username}`}</div></a>
            </div>
        );
    }
}

export default Sidebar;