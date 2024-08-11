function List(props) {
    if (!props.animals) {
        return <div>Loading...</div>;
    }

    if (props.animals.length === 0) {
        return <div>There are no animals in the list!</div>;
    }

    return (
        <ul>
            {props.animals.map((animal) => {
                return <li key={animal}>{animal}</li>;
            })}
        </ul>
    );
}

function List2(props) {
    return (
        <>
            {!props.animals ? (
                <div>Loading...</div>
            ) : props.animals.length > 0 ? (
                <ul>
                    {props.animals.map((animal) => {
                        return <li key={animal}>{animal}</li>;
                    })}
                </ul>
            ) : (
                <div>There are no animals in the list!</div>
            )}
        </>
    );
}

function List3(props) {
    return (
        <>
            {!props.animals && <div>Loading...</div>}
            {props.animals && props.animals.length > 0 && (
                <ul>
                    {props.animals.map((animal) => {
                        return <li key={animal}>{animal}</li>;
                    })}
                </ul>
            )}
            {props.animals && props.animals.length === 0 && <div>There are no animals in the list!</div>}
        </>
    );
}

export const RenderJSXFour = () => {
    const animals = [];
    return (
        <div>
            <h1 style={{ margin: 0 }}>Other ways to render conditionally: </h1>
            <span>(Otras formas de renderizar condicionalmente)</span>
            <div>
                <h2>We can also use if, if/else, and switch to conditionally render something.</h2>
            </div>
            <div>
                <h3>Animals: </h3>
                <List animals={animals} />
                <List />
                <List2 animals={animals} />
                <List2 />
                <List3 animals={animals} />
                <List3 />
            </div>
        </div>
    );
}