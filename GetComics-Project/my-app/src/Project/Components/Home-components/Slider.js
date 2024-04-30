import { useEffect, useState } from 'react';
import '../styles/slider.css'
import { TfiAngleLeft } from "react-icons/tfi";
import { TfiAngleRight } from "react-icons/tfi";


function Slider({ images }) {
    const [current, setcurrent] = useState(0);
    const [autplay, setautoplay] = useState(true);
    let timeout = null

    useEffect(()=>{
        setTimeout(() => {
            timeout = autplay && slideright();
        }, 5000);
    })

    const slideright =()=>{
        setcurrent(current === images.length - 1 ? 0 : current + 1);
    };
    const slideleft =()=>{
        setcurrent(current === 0 ? images.length - 1 : current -1);
    };
    console.log(current)
    return (
        <div className='slider' 
        onMouseEnter={()=>{
            setautoplay(false);
            }}
        onMouseLeave={()=>{
            setautoplay(true)
        }}
        >
            <div className='slider-wrapper'>
                {images.map((image, index) => {
                    return (
                        // Condition True : False
                        <div key={index} className={index === current ? "slider-card slider-card-active" 
                        : "slider-card"}>
                            <img  className="images" src={image.image} alt='' />
                            <div className='card-overlay'>
                                <h2 className='card-title'>{image.title}</h2>
                            </div>
                        </div>
                    )
                })}
                <div className='left-arrow' onClick={slideleft}>
                    <TfiAngleLeft />
                    </div>
                <div className='right-arrow' onClick={slideright}>
                    <TfiAngleRight />
                    </div>
                <div className='pagination'>
                    {images.map((_, index)=>{
                        return(
                            <div key={index}
                            className={
                                index === current ? "pagination-dot pagination-dot-active" 
                            : "pagination-dot"
                        } 
                        onClick={()=>{
                            setcurrent(index)
                        }}></div>
                        )

                    })}
                </div>
            </div>

        </div>
    );
}

export default Slider;