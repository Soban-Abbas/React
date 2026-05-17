
import { Core_Concepts_Data } from './data.js'
import Header from './components/Header.jsx';
import CoreConpts from './components/CoreConpts.jsx';

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
