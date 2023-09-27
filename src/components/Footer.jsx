import './scss/Dashboard.scss'
import Facebook from '../assets/facebook.png';
import LinkedIn from '../assets/linkedin.png';
import Youtube from '../assets/youtube.png';
import Twitter from '../assets/twitter.png';

export default function Footer() {

    return (
        <div className='footer'>
            <div className='footer-icons'>
                <p><img src={Facebook} width={15} height={15} /></p>
                <p><img src={Twitter} width={15} height={15} /></p>
                <p><img src={LinkedIn} width={15} height={15} /></p>
                <p><img src={Youtube} width={15} height={15} /></p>
            </div>
            <p>Example@email.com</p>
            <p>Copyright © 2020 Name. All rights reserved.</p>
        </div>
    )
}