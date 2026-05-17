import reactImg from '../assets/react-core-concepts.png'
import './Header.css'
const dynamicData = ['Fundamental', 'Core', 'Crucial'];
function getRandomIndex() {
    return Math.floor(Math.random() * (2 + 1))
}
function Header() {
    const randomWord = dynamicData[getRandomIndex()]
    return (
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
export default Header;