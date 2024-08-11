import { useState } from "react";

export function Person() {
    const [person, setPerson] = useState({ firstName: "John", lastName: 'Farley', age: 33 });

    const handleIncreaseAge = () => {
        setPerson((prevPerson) => ({ ...prevPerson, age: prevPerson.age + 1 }));
    };

    return (
        <>
            <h1>{person.firstName + " " + person.lastName}</h1>
            <h2>{person.age}</h2>
            <div>
                <label htmlFor="" style={{ marginRight: '5px' }}>First name:</label>
                <input type="text" value={person.firstName} onChange={(event) => {
                    setPerson({ ...person, firstName: event.target.value });
                }} />
            </div>
            <div>
                <label htmlFor="" style={{ marginRight: '5px' }}>Last name:</label>
                <input type="text" value={person.lastName} onChange={(event) => {
                    setPerson({ ...person, lastName: event.target.value });
                }} />
            </div>
            <button onClick={handleIncreaseAge} style={{marginTop: '1rem'}}>Increase age</button>
        </>
    );
}
