
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
  
  return (
    <div>
      <Header></Header>
     
      <main>
        <h2>Time to get started!</h2>
        <section id='core-concepts'>
          <ul>
           
            {Core_Concepts_Data.map((concept)=>{
             return <CoreConpts key={concept.title} title={concept.title} discription={concept.discription}
                image={concept.image} />
            })}
          </ul>
        </section>
        <section id='examples'>
          <menu>
            <TabButton isSelected={seletedContent==="components"} onSelect={() => handleClick("components")}>Components</TabButton>
            <TabButton isSelected={seletedContent === "jsx"} onSelect={()=> handleClick("jsx")}>JSX</TabButton>
            <TabButton isSelected={seletedContent === "props"} onSelect={()=> handleClick("props")}>Props</TabButton>
            <TabButton isSelected={seletedContent === "state"} onSelect={()=> handleClick("state")}>State</TabButton>
          </menu>
         {(!seletedContent)? <p>Please select the Topic</p> : null}
          {(seletedContent) ? <div id="tab-content">
            <h3>{examples[seletedContent].title}</h3>
            <p>{examples[seletedContent].description}</p>
            <pre>
              <code>
                {examples[seletedContent].code}
              </code>
            </pre>
          </div>:null }
        </section>
        
      </main>
    </div>
  );
}

export default App;
