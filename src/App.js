import './App.css';
import Testimony from './components/Testimony';
import data from './data';


function App() {
  const testimony = data.map ( (testimony) =>(
       <Testimony 
        key = {testimony.id}
        name = {testimony.name}
        country = {testimony.country}
        image = {testimony.image}
        position = {testimony.position}
        company = {testimony.company}
        testimony = {testimony.testimony} 
        compliment = {testimony.compliment}
        />
)
        
  );

	return (<div className='App'> 
		<div className='principal-container'>
        	<h1>This is what our students say about JPTraining</h1>
		{testimony}
        	</div>
	</div>
	)

}


export default App;
