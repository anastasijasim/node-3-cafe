const Hero = (props) =>{
    return (
        <div className="Hero-Background">
            <h3 className="Hero-item">{props.title}</h3>
            <p className="Hero-item">{props.subtitle}</p>
            <p className="Hero-item">{props.subtitletwo}</p>
        </div>
    )
}

export default Hero