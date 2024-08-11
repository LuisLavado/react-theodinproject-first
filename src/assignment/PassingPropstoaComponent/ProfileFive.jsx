/**
 * Passing JSX as children
 * Cuando anida contenido dentro de una etiqueta JSX, el componente principal recibirá ese 
 contenido en una propiedad llamada children. Por ejemplo, el componente Card que se muestra 
 a continuación recibirá una propiedad children establecida en <Avatar /> y la representará en un contenedor div:
 */

import { Avatar } from "./Avatar";

function Card({ children }) {
    return (
        <div className="card" style={{ padding: '1rem', backgroundColor: 'yellow' }}>
            {children}
        </div>
    );
}

export default function ProfileFive() {
    return (
        <Card>
            <h2>Profile 5</h2>
            <Avatar
                size={100}
                person={{
                    name: 'Katsuko Saruhashi',
                    imageId: 'YfeOqp2'
                }}
            />
        </Card>
    );
}
