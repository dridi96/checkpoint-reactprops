import Profil from './component/profile/profession';
import Navbar from './component/profile/navbar';
import './App.css';
function App() {
  const HandleName = (props)=>{
      alert('The user is '+ props);
}
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="media">
      <div style={{ border:"solid",  marginTop:"30px",}} id="about">
        <Profil fullname='Dridi Syrine' bio='I am currently a student at GO My Code Academy,Architecte is looking for a new opportunity as a software Developper.' profession='FullName="Dridi Syrine" Age="25 years old" Gender="Female" Interests="Learning' handle={HandleName}>
        <img src="https://i.pinimg.com/474x/b2/fc/f7/b2fcf7e224c95da3197b308de719bd46.jpg" className="mr-3" alt="Biophoto"  style={{width:"280px"}}/>
        </Profil>
        </div>
      </div>
    </div>
    
  );
}

export default App;