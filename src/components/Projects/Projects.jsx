import Typewriter from "typewriter-effect";
import './Projects.css'

export const Projects = () => {
    return (
        <div className="Projects row">
            <div className="Projects-title col-12">
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter
                            .start()
                            .typeString("projects();")
                            .pauseFor(1000)
                    }}
                />
            </div>
        </div>
    );
}