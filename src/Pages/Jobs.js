import React, { Component } from 'react'
import Job from '../Components/Job';
import RequestService from "../Services/RequestService";
import GoogleMap from 'google-map-react';
 
const AnyReactComponent = ({ text }) => (
    <div style={{
      color: 'white', 
      background: 'grey',
      padding: '15px 10px',
      display: 'inline-flex',
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '100%',
      transform: 'translate(-50%, -50%)'
    }}>
      {text}
    </div> )

export default class Jobs extends Component {
    static defaultProps = {
        center: {
          lat: 59.95,
          lng: 30.33
        },
        zoom: 2
      };

    state = {
        jobs: [],
        lat: 59.955413,
        lng: 30.337844,
        infoMarket: 'Test'
    }

    async getData() {
        try{
            let mydata = await RequestService.get('/api/jobs',null);
            
            
                this.setState({
                    jobs: mydata.data.data
                  })
            
            
           
          }catch(e){
            console.log("errrp" + e);
          }
    
  }

  handler(id) {
    console.log(id);
    
    let res = this.state.jobs.find(element => element = id);
   
    this.setState({
        lat:  parseInt(res.latitude),
        lng:  parseInt(res.longitude),
        infoMarket: res.title
      })

 
  }

  componentDidMount(){
    this.getData();
    
  }
   
    render() {
        
        return (
        <div className="container">
           
            <div className="row">

                <div className="col-md-6">
                    
                        { this.state.jobs.map( jobs => (
                            <Job  
                                key={jobs.id}
                                title={jobs.title}
                                handler = {this.handler.bind(this, jobs.id)} 
                                description={jobs.description}
                                date={jobs.date}
                                status={jobs.status}
                                    />
                        ))}
             
                </div>

                <div className="col-md-6"  style={{ height: '100vh', width: '100%' }}>
            <GoogleMap
                apiKey="AIzaSyCladyqMK8sQZnuJRlZU2DCSbTY7Cv5_AI" // set if you need stats etc ...
                center={this.props.center}
                zoom={this.props.zoom}>
                 <AnyReactComponent 
                    lat={this.state.lat} 
                    lng={this.state.lng} 
                    text={this.state.infoMarket} 
                    />
            </GoogleMap>
                </div>

            </div>

            
        </div>
        )
    }
}
