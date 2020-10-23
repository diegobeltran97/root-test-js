import React, { Component } from 'react'

export default class Job extends Component {

 


    render() {
        const { title, description ,image, date, status } = this.props
        return (
            <div className="col-12">
                
                <div className="card mt-3 " >
                   
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                         <p className="card-text">{description}</p>
                    </div>
                    <ul className="list-group list-group-flush">
                    <li className="list-group-item">{date}</li>
                    <li className="list-group-item">{status}</li>
                      
                    </ul>
                    <div className="card-body">
                        
                        <button
                         className="btn btn-block btn-info fourth"
                         onClick={this.props.handler}
                         
                         >Position
                         
                         </button>
                       
                    </div>
                </div>
            </div>
        )
    }
}
