import React from 'react'
import Sidebar from './Sidebar'
import Menu from './Menu'

class Bio extends React.Component{
    constructor(){
        super();
        this.state={};
    }

    formatDate = () => {
        if(this.props.user.created_at){
            const year = this.props.user.created_at.substring(0, 4);
            const month = this.props.user.created_at.substring(5, 7);
            const day = this.props.user.created_at.substring(8, 10);
            
            return `${month}/${day}/${year}`;
        }
        return '';
    }

    lastActivity = () => {
        let today = new Date();
        let updated_at = new Date(this.props.user.updated_at);
        const msInDay = 24 * 60 * 60 * 1000

        updated_at.setHours(0,0,0,0)
        today.setHours(0,0,0,0)

        const daysAgo = (+today - +updated_at)/msInDay;

        if(daysAgo === 0)
            return 'today'
        if(daysAgo === 1)
            return 'yesterday'
        if(daysAgo < 31)
            return `${daysAgo.toString()} days ago`;
        else
            return 'Over 30 days ago';
    }

    render() {
        return(
            <div className='container bio-page'>
                <Sidebar username={this.props.user.name} profilePic={this.props.user.avatar_url} link={this.props.user.html_url}/>
                <Menu/>
                <div className='about'>
                    {/* just a few pieces of info about your bio */}
                    {this.props.user.bio ? 
                        <p className='bio-text'>{this.props.user.bio}</p> :
                        <p className= 'no-bio'>This user has not updated their bio</p>
                    }
                    <div className='user-stats'>
                        <p>User since: {this.formatDate()}</p>
                        <p>Last activity: {this.lastActivity()}</p>
                        <p>{this.props.user.public_repos} public repositories</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Bio;