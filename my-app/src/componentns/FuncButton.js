const FuncButton = (props) =>{
    //const {color,title} = props //props чтоб работали разные кнопкм
    //{title:"Spausk mane"} 
    return <button style = {{ backgroundColor:props.color}}>{props.title} </button>
}

export default FuncButton


//const {color, title} = props;
//return <button style={{backroundColor:color }}> {title} </button>