function ListItem(props){
    return props.animal.startsWith('L') && <li>{props.animal}</li>;
}
function List(props){
    if(!props.animals){
        return <div>Loading...</div>
    }
    if(props.animals.length === 0){
        return <div>There are no animals in the list!</div>
    }
    return(
        <ul>
            {props.animals.map((animal) => {
                return <ListItem key={animal} animal={animal}/>
            })}
        </ul>
    );
}
function SampleComponent(){
    const animals = ['Lion','Cow','Snake','Lizard']
    return(
        <>
            <div>
                <h1>Animals: </h1>
                <List animals = {animals}/>
            </div>

        </>
    );
}

export { SampleComponent };