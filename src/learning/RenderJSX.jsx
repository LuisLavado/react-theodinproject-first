
export const RenderJSX = () => {
    const animals = ["Lion", "Cow", "Snake", "Lizard"];
    const animalsList = animals.map((animal) => <li key={animal}>{animal}</li>);
    return (
        <div>
            <h1 style={{ margin: 0 }}>Rendering a list of elements in JSX: </h1>
            <span>(Representación de una lista de elementos en JSX)</span>
            <div>
                <h2>Animals: </h2>
                <ul>
                    {animals.map((animal) => {
                        return <li key={animal}>{animal}</li>;
                    })}
                </ul>
            </div>
            <div>
                <h2>Animals: </h2>
                <ul>{animalsList}</ul>
            </div>
        </div>
    );
}