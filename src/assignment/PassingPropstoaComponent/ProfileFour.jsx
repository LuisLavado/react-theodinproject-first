import { getImageUrl } from './utils.js';


/**
 * The default value is only used if the size prop is missing or if you pass size={undefined}. 
 But if you pass size={null} or size={0}, the default value will not be used.
 */
function Avatar({ person, size = 100 }) {
    return (
        <img
            className="avatar"
            src={getImageUrl(person)}
            alt={person.name}
            width={size}
            height={size}
        />
    );
}


function Profile({ person, size, isSepia, thickBorder }) {
    return (
        <div className="card">
            <Avatar
                person={person}
                size={size}
                isSepia={isSepia}
                thickBorder={thickBorder}
            />
        </div>
    );
}
/**
* No hay nada de malo con el código repetitivo: puede ser más legible. 
Pero a veces es posible que valore la concisión. Algunos componentes reenvían todas sus propiedades a sus hijos, 
como lo hace este Perfil con Avatar. Debido a que no usan ninguna de sus propiedades directamente, 
puede tener sentido usar una sintaxis de "propagación" más concisa:
*/

function ProfileSecond(props) {
    return (
        <div className="card">
            <Avatar {...props} />
        </div>
    );
}
/**
 * Esto reenvía todos los elementos del perfil al avatar sin enumerar cada uno de sus nombres.
 * Use la sintaxis de propagación con moderación. Si la usa en todos los demás componentes, 
 algo no está bien. A menudo, indica que debe dividir sus componentes y pasar los elementos secundarios como JSX. 
 */

export default function ProfileFour() {
    return (
        <div>
            <Profile
                size={100}
                person={{
                    name: 'Katsuko Saruhashi',
                    imageId: 'YfeOqp2'
                }}
            />
            <ProfileSecond
                size={100}
                person={{
                    name: 'Katsuko Saruhashi',
                    imageId: 'YfeOqp2'
                }}
            />
        </div>
    );
}

