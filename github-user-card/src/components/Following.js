import React from 'react'
import Sidebar from './Sidebar'
import Menu from './Menu'
import FollowCard from './FollowCard'

class Following extends React.Component{
    constructor(){
        super();
        this.state={};
    }

    render(){
        return(
            <div className='container following-page'>
                <Sidebar username={this.props.user.name} profilePic={this.props.user.avatar_url} link={this.props.user.html_url}/>
                <Menu/>
                <div className='follow-list'>
                    { 
                    this.props.following ?
                        this.props.following.map( f => (
                            <FollowCard clickFollowCard={this.props.clickFollowCard} key={f.id} info={f}/>
                        )) :
                        null
                    }
                </div>
            </div>
        );
    }
}

export default Following;