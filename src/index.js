import React, {Component} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.css';

class WhoAmI extends Component{
  constructor(props){
    super(props);
    this.state = {
      years: 26
    }
    this.nextYear = this.nextYear.bind(this);
  }

  nextYear(){
    this.setState(state=>({
      years: ++state.years
    }));
  }

  render(){
        const {name, surname, link} = this.props;
        const {years} = this.state;
        return (<React.Fragment>
          <button onClick={this.nextYear}>++</button>
          <h1>My name is {name}  and surename {surname}, age {years} </h1>
          <a href={link}>My profile</a>
        </React.Fragment>);
  }
}


const All = () => {
 return (<>  
  <WhoAmI name="user1" surname="surname1" link="facebook.com" />
  <WhoAmI name="user2" surname="surname2" link="vk.com" />
  <WhoAmI name="user3" surname="surname3" link="google.com" />
</>);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);