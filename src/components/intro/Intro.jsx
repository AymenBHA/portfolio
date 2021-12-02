import './intro.css' 
import Me from "../../img/me.png"

const Intro = () => {
    return (
        <div className='i'>
            <div className='i-left'> 
            <div className="i-left-wrapper">
                <div className='i-intro'>Hello! My name is</div>
                <h1 className='i-name'>Aymen Boulila</h1>
                <div className="i-title">
                    <div className="i-title-wrapper">
                        <div className="i-title-item">AI Reasearcher</div>
                        <div className="i-title-item">Web Developper</div>
                        <div className="i-title-item">DevOps Ingenier</div>
                        <div className="i-title-item">Backend Developper</div>
                        <div className="i-title-item">Future Entrepreneur</div>
                    </div>
                </div>
                <p className="i-desc">
                I'm a Artificial Intelligence Researcher graduated from Higher Institute of Computer Science. 
                I specialize in Web development, Deep Learning and Dev-Ops technologies.
                </p>
            </div>
            </div>
            <div className='i-right'>
                <div className="i-bg"></div>
                <img src={Me} alt="" className="i-img" />
            </div>
        </div>
    )
}

export default Intro
