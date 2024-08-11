Pasar propiedades a un componente
Los componentes de React usan propiedades para comunicarse entre sí. Cada componente principal puede pasar información a sus componentes secundarios al proporcionarles propiedades. Las propiedades pueden recordarte a los atributos HTML, pero puedes pasar cualquier valor de JavaScript a través de ellas, incluidos objetos, matrices y funciones.

Aprenderá:
- Cómo pasar propiedades a un componente
- Cómo leer propiedades de un componente
- Cómo especificar valores predeterminados para propiedades
- Cómo pasar algo de JSX a un componente
- Cómo cambian las propiedades con el tiempo

Propiedades conocidas
Las propiedades son la información que se pasa a una etiqueta JSX. Por ejemplo, className, src, alt, width y height son algunas de las propiedades que se pueden pasar a una <img>:

```
function Avatar() {
  return (
    <img
      className="avatar"
      src="https://i.imgur.com/1bX5QH6.jpg"
      alt="Lin Lanying"
      width={100}
      height={100}
    />
  );
}

export default function Profile() {
  return (
    <Avatar />
  );
}
```
## Resumen
- Para pasar props, agrégalos al JSX, tal como lo harías con los atributos HTML.
- Para leer props, usa la sintaxis de desestructuración de la función Avatar({ person, size }).
- Puedes especificar un valor predeterminado como size = 100, que se usa para props faltantes o indefinidos.
- Puedes reenviar todos los props con la sintaxis de propagación JSX <Avatar {...props} />, ¡pero no la uses en exceso!
- Los JSX anidados como <Card><Avatar /></Card> aparecerán como props secundarios del componente Card.
- Los props son instantáneas de solo lectura en el tiempo: cada render recibe una nueva versión de los props.
- No puedes cambiar los props. Cuando necesites interactividad, necesitarás establecer el estado.