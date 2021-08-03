import { NavLink } from "react-router-dom";

function YearItem(props) {
  if (props.description === "edge year") {
    return <p className="edgeYear">{props.year}</p>;
  } else if (props.description !== null) {
    return (
      <div className="fullYear">
        <span id="year">{props.year}</span>
        <NavLink to={`/${props.year}`} id="description">
          <span>{props.description}</span>
        </NavLink>
      </div>
    );
  } else {
    return <p className="emptyYear">-</p>;
  }
}
export default YearItem;
