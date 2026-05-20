
import { Core_Concepts_Data } from './data.js'
import Header from './components/Header.jsx';
import CoreConpts from './components/CoreConpts.jsx';
import TabButton from './components/TabButton.jsx';
import { useState } from 'react';
import {examples} from './data.js'
function App() {
  const [seletedContent, setNewcontent] = useState()
  function handleClick(btnName){
    console.log(btnName+"Btn Click")
     setNewcontent(btnName);
  }
  let content= <p>Please Select the Topic</p>
  if(seletedContent){
    content = <div id="tab-content">
      <h3>{examples[seletedContent].title}</h3>
      <p>{examples[seletedContent].description}</p>
      <pre>
        <code>
          {examples[seletedContent].code}
        </code>
      </pre>
    </div>
  }
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
        <section id='examples'>
          <menu>
            <TabButton onSelect={() => handleClick("components")}>Components</TabButton>
            <TabButton onSelect={()=> handleClick("jsx")}>JSX</TabButton>
            <TabButton onSelect={()=> handleClick("props")}>Props</TabButton>
            <TabButton onSelect={()=> handleClick("state")}>State</TabButton>
          </menu>
         {content}
        </section>
        
      </main>
    </div>
  );
}

export default App;
