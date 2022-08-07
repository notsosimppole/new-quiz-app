import './Main.css';
import { Link } from 'react-router-dom';

export default function Main() {
    return (
        <div className='neya-div'>

        <div className='main--area' style={{ overflow: 'hidden' }}>
            <div className='blob-cont'>
                <div className='blob-blue'></div>
                <div className='blob-yellow'></div>
            </div>
            <h1>Quizzical</h1>
            <p className='main--p'> 5 Questions. 5 Miuntes. Infinite Fun.</p>
            <Link to = "/quiz">
                <button className='main--btn'>Click To Start</button>
            </Link>
        </div>
        </div>
    )
}