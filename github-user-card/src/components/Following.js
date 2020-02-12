import React from 'react'
import Sidebar from './Sidebar'
import Menu from './Menu'

class Following extends React.Component{
    constructor(){
        super();
        this.state={};
    }

    render(){
        return(
            <div className='container following-page'>
                <Sidebar/>
                <Menu/>
                <div className='following-list'>

                </div>
            </div>
        );
    }
}

export default Following;