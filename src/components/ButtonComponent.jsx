function ButtonComponent(props){
    console.log(props);
    return <button className="btn">Clicca qui per {props.btn} </button>;
}

export default ButtonComponent;