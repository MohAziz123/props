import PropTypes from 'prop-types';


const Profile = ({fullName, bio, profession,children,handleName})=>{
    return(
        <>
            {
                children
            } 
            <h1 className="azerty" >I am {fullName} </h1>
            <h1 className="azerty" >This is {bio}</h1>
            <h1 className="azerty" >This is {profession} </h1>

        
       
        
            <button onClick={()=>handleName(fullName)}>react App</button>
      



        </>
    )
}

Profile.propTypes = {
   
    fullName: PropTypes.string,
    bio: PropTypes.string,
}
export default Profile