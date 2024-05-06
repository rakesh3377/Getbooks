import image from './asset/batman-png.png';
import '../styles/aboutinfo.css';

export default function Aboutcontent(){
    return(
        <div className="information">
            <div className="content">
                <div className='title'>
                <h1 className='wel'>Welcome To</h1>
                <h1 className='get'>Get comics</h1>
                <p>Get comics are very intresting story ae djdndjs dksdn sdnweue sdjhjdskhjdsfh shhdjsdnm sjnejned fjefhehheff nnnfrjnf jrwlksmsfjd sljeefuewbkjewnf wkeufwubewf wkjjeufhuiwfwkjef wefhuwefhnemnwefnwf wkkjerfhuwkefnwef wjkueho3i2nef kwueyr3uf kwu32fjwf wku3iu3wfn wkuehkbeufwhkfj w3uhfbkwbfi3u</p>
                </div>
            </div>
            <div className="poster">
                <img src={image}></img>
            </div>
        </div>
    )
}