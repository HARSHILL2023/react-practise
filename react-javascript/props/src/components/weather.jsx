const Hello = (props)=>{

    {
        
        
    if(props.temp<=0){
        return (
        <h1>to high</h1>
        )
    }
    else{
        return (
        <h1>to low</h1>
        )
    }

    }
}

export default Hello