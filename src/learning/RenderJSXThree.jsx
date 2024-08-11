function List(props) {
    return (
        <ul>
            {props.animals.map((animal) => {
                return animal.startsWith("L") ? <li key={animal}>{animal}</li> : null;
            })}
        </ul>
    );
}

function List2(props) {
    return (
        <ul>
            {props.animals.map((animal) => {
                return animal.startsWith("L") && <li key={animal}>{animal}</li>;
            })}
        </ul>
    );
}

export const RenderJSXThree = () => {
    const animals = ["Lion", "Cow", "Snake", "Lizard"];
    return (
        <div>
            <h1 style={{ margin: 0 }}>Conditionally rendering UI: </h1>
            <span>(Representación condicional de la interfaz de usuario)</span>
            <div>
                <h2>Using the ternary operator</h2>
            </div>
            <div>
                <h3>Animals: </h3>
                <List animals={animals} />
                <List2 animals={animals} />
            </div>
        </div>
    );
}