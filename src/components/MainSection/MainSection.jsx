import './MainSection.css'
import Photo from './me.jpeg'
import Typewriter from "typewriter-effect";

const MainSection = () => {
    return (
        <div className="main-section">
            <div className="main-content">
                <div className="headliner">
                    welcome to my personal website. i'm
                </div>
                <div className="name">
                    Anthony Immenschuh
                </div>
                <div className="work-title">
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter
                                .start()
                                .typeString("full-stack software engineer")
                                .pauseFor(1000)
                        }}
                        className="typewriter-title"
                    />
                </div>
                <div className="interests">
                    with passions in ui/ux, music, coffee, and art.
                </div>
            </div>
            <div className="photo-section">
                <img className="photo" src={Photo} alt="Anthony Immenschuh"/>
            </div>
        </div>
    );
}

export default MainSection;