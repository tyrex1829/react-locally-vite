export default function ColorList({ colors }) {
    return (
        <div>
            <h1>Color List</h1>
            <ul>
                { colors.map(color => <li style={{ color }}>{ color }</li>) }
            </ul>
        </div>
    );
}