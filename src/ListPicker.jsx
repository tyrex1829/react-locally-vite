export default function ListPicker({ values }) {
    const randInd = Math.floor(Math.random() * values.length);
    const randElement = values[randInd];
    return (
        <div>
            <p>The list of values: {values}</p>
            <p>Random element is:: {randElement}</p>
        </div>
    );
}