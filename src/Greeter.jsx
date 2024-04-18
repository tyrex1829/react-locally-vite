export default function Greeter({ person, from }) {
    return (
        <>
            <h1>Hey, {person}</h1>
            <h2>-{from}</h2>
        </>
    );
}