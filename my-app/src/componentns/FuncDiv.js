import FuncButton from "./FuncButton"

const FuncDiv = (props) =>{
    return (
        <div>

            <h3>{props.title}</h3>
            <p>{props.subtitle}</p>
            <FuncButton  title ={props.buttonText} color="red" />

        </div>
    )
}

export default FuncDiv

//{...props} geriau taip nedaryti