import "bootstrap/dist/css/bootstrap.min.css";
import "./general.css";
function Fooditem({ fitem }) {
  return (
    <ul className="list-group">
      {fitem.map((item) => (
        <li key={item} className="list-group-item">
          {item}
        </li>
      ))}
    </ul>
  );
}
export default Fooditem;
