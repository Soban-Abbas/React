import componentsImg from './assets/Components.png'
import jsxImg from './assets/jsx-ui.png'
import propsImg from './assets/config.png'
import stateImg from './assets/state-mgmt.png'
export const Core_Concepts_Data=[
    {
        title:"components",
        image:componentsImg,
        discription:"Components are reusbale JSX Code"
    },
{
    title:"JSX",
    image:jsxImg,
    discription:"JSX is JavaScript syntax Xtension"
    },
{
    title:"Props",
    image:propsImg,
    discription:"Props help to change content in components"
    },
    {
        title: "State",
        image: stateImg,
        discription: "State help to dynamically change UI"
    },
]


 export const examples = {
    components: {
        title: "Components",
        description:
            "Components are reusable building blocks in React used to split UI into independent pieces.",

        code: `
function Header() {
  return <h1>Hello World</h1>;
}

export default Header;
    `
    },

    jsx: {
        title: "JSX",
        description:
            "JSX allows you to write HTML-like code inside JavaScript in React.",

        code: `
function App() {
  return (
    <div>
      <h1>Hello JSX</h1>
    </div>
  );
}
    `
    },

    state: {
        title: "State",
        description:
            "State is used to store and manage dynamic data inside a component.",

        code: `
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
}
    `
    },

    props: {
        title: "Props",
        description:
            "Props are used to pass data from one component to another.",

        code: `
function Welcome(props) {
  return <h1>Hello {props.name}</h1>;
}

export default function App() {
  return <Welcome name="Soban" />;
}
    `
    }
};
