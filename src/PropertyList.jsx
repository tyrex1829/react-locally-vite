import "./PropertyList.css"
import Property from "./Property";

function PropertyList ({ items }) {
    return (
        <div className="PropertyList">
            { items.map((i) => (
                <Property key={i.id} {...i} />
            )) }
        </div>
    );
}

export default PropertyList;