import axios from 'axios';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

class RequestService{
  url='http://coding-test.rootstack.net/';

  axiosinstance = axios.create({
    baseURL: this.url,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  });

  userLogin = async (username, password) => {
      return await this.axiosinstance.post('api/auth/login', { email: username, password : password});
  }

  get = async (endpoint, data)=>{
    this.axiosinstance.defaults.headers.get['Authorization'] = 'Bearer ' + cookies.get('access');
    return await this.axiosinstance.get(endpoint);
  }


}

export default new RequestService();