import React from "react";
import '../components/Styles sheet/Testimony.css';


function Testimony(props) {
  return (
    <div className= 'container-testimony'>
      <img
        className='image-testimony'
        src={require(`../images/Testimony-${props.image}.jpg`)}
        alt=''
        />
        <div className='container-text-testimony'>
          <p className='name-testimony'><strong>{props.name}</strong> from {props.country}</p>
          <p className='position-testimony'><strong>{props.company}</strong> {props.position}</p>
          <p className='text-testimony'>"{props.testimony}"</p>
          <p className='compliment-testimony'><br></br> |"...<strong>{props.compliment}</strong>..."|</p>
        </div>
    </div>

  );
}

export default Testimony;