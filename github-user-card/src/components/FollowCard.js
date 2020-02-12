import React from 'react'

class FollowCard extends React.Component {
    constructor(){
        super();
        this.state={};
    }

    render(){
        return(
            <div className='follow-card' onClick={() => this.props.clickFollowCard(this.props.info.login)}>
                <img src={`${this.props.info.avatar_url}`} alt='follower pic'/>
                <p>{this.props.info.login}</p>
            </div>
        );
    }
}

export default FollowCard;