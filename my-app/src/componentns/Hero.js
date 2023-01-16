//import "./Hero.css";

const Hero = (props) =>{
    return (
        <div className="Hero-background">
            <h1 className="Hero-item">{props.title}</h1>
            <h2 className="Hero-item">{props.subtitle}</h2>
        </div>
    )
}

export default Hero