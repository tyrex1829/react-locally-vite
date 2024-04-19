function handleFormSubmit (evt) {
    evt.preventDefault();
    console.log("Submitted The Form!!");
}

export default function Form () {
    return (
        <form onSubmit={handleFormSubmit}>
            <button>Submit</button>
        </form>
    );
}