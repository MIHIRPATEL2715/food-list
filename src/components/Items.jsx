import "bootstrap/dist/css/bootstrap.min.css";
import "./general.css";
function Fooditem({ fitem }) {
  return (
    <ul className="list-group">
      {fitem.map((item) => (
        <li key={item} className="list-group-item">
          <p className="pera">{item}</p>
          <button type="button" class="btn btn-info">
            Add
          </button>
        </li>
      ))}
    </ul>
  );
}
export default Fooditem;
