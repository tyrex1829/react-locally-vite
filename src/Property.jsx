export default function Property ({name, rating, price, id}) {
    return (
        <div>
            <h2>{ name }</h2>
            <h5>${ price } a night</h5>
            <h6>{ rating }⭐</h6>
        </div>
    );
}