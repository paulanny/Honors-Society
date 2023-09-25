import './Hero.css';

const Hero = () => {
    return (
        <div className='herodiv'> 
            <div className='herop'>
                <p className='heropone'>By Scholars,</p>
                <p className='heroptwo'>For Scholars</p>
            </div>
            <div className="herobtn">
                <a className="herobtntrans">Join Society</a>
                <a className="herobtnsolid">Donate</a>
            </div>
        </div>
    )
};

export default Hero;