export default function Greeter({ person="everyone", from="anonymous" }) {
    return (
        <>
            <h1>Hey, {person}</h1>
            <h2>-{from}</h2>
        </>
    );
}