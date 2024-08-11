function ListItem(props) {
    return <li>{props.animal}</li>
}

function List(props) {
    return (
        <ul>
            {props.animals.map((animal) => {
                return <ListItem key={animal} animal={animal} />;
            })}
        </ul>
    );
}

export function RenderJSXTwo() {
    const animals = ["Lion", "Cow", "Snake", "Lizard"];
    return (
        <div>
            <h1 style={{ margin: 0 }}>Rendering a list of components in JSX: </h1>
            <span>(Representación de una lista de componentes en JSX)</span>
            <div>
                <h2>Animals: </h2>
                <List animals={animals} />
            </div>
        </div>
    );
}