import reactImg from './assets/react-core-concepts.png'
import { Core_Concepts_Data } from './data.js'
const dynamicData = ['Fundamental','Core','Crucial'];
function getRandomIndex(){
  return Math.floor(Math.random()*(2+1))
}
function Header(){
  const randomWord=dynamicData[getRandomIndex()]
  return(
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {randomWord} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>

  )
}

function CoreConpts(props){
  return(
    <li id='core-concepts'>
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.discription}</p>
    </li>

  )
}
function App() {
  return (
    <div>
      <Header></Header>
     
      <main>
        <h2>Time to get started!</h2>
        <section id='core-concepts'>
          <ul>
            <CoreConpts title={Core_Concepts_Data[0].title}
              image={Core_Concepts_Data[0].image}
              discription={Core_Concepts_Data[0].discription} />


            <CoreConpts title={Core_Concepts_Data[1].title} discription={Core_Concepts_Data[1].discription}
              image={Core_Concepts_Data[1].image} />
            <CoreConpts title={Core_Concepts_Data[2].title} discription={Core_Concepts_Data[2].discription} image={Core_Concepts_Data[2].image} />
            <CoreConpts title={Core_Concepts_Data[3].title} image={Core_Concepts_Data[3].image} discription={Core_Concepts_Data[3].discription} />
          </ul>
        </section>
        
        
      </main>
    </div>
  );
}

export default App;
