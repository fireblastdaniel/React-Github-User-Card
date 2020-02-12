import React from 'react'
import Sidebar from './Sidebar'
import Menu from './Menu'
import FollowCard from './FollowCard'

class Followers extends React.Component{
    constructor(){
        super();
        this.state={}
    }

    render() {
        return(
            <div className='container followers-page'>
                <Sidebar username={this.props.user.name} profilePic={this.props.user.avatar_url} link={this.props.user.html_url}/>
                <Menu/>
                <div className='follow-list'>
                    { 
                    this.props.followers ?
                        this.props.followers.map( f => (
                            <FollowCard key={f.id} info={f}/>
                        )) :
                        null
                    }
                </div>
            </div>
        );
    }
}

export default Followers;