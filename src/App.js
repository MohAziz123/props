
import Profile from './Profile/Profile';
import './App.css';
import aziz from './1032.jpg'
function App() {
  let fullName= "Trabelsi Mohamed Aziz"
  let bio = "Chanteur"
  let  profession = "Student"
  const handleName=(a)=>alert(`Hello ${a} !`)
 
  return(
    
  
    <div>
        
      <Profile fullName={fullName} bio={bio} profession={profession} handleName={handleName} >
        <img className='image' src={aziz} alt="not" ></img>
      </Profile>
   
    </div>
  )
}

export default App;
