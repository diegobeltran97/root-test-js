import React, { Component } from 'react'
import RequestService from "../Services/RequestService";



export default class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
          name: '',
          email: '',
          email_verified_at: ''
        }
      }
    
     async getData() {
            try{
                let mydata = await RequestService.get('/api/auth/me',null);
            
            
               let res =  Object.keys( mydata.data ).length;
               if ( res > 0 ) {
                this.setState({
                  name:  mydata.data.name,
                  email: mydata.data.email, 
                  email_verified_at:  mydata.data.email_verified_at

                })

               } else {
                this.props.history.push("/login");
               }
                
               
              }catch(e){
                console.log("errrp" + e);
                this.props.history.push("/login");
              }
        
      }

      componentDidMount(){
        this.getData();
      }

    render() {
        const { name, email ,email_verified_at } = this.state
        return (
            <div>
               
                <div className="card" style={{width: "18rem"}}>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">name: {name}</li>
                        <li className="list-group-item">email: {email}</li>
                        <li className="list-group-item">email-veried: {email_verified_at}</li>
                    </ul>
                </div>
            </div>
        )
    }
}
