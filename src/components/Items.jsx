import "bootstrap/dist/css/bootstrap.min.css";
import "./general.css";
function Fooditem() {
  let items = ["dal", "bhat", "roti", "shak", "butter milk"];
  return (
    <ul className="list-group">
      {items.map((fitem) => (
        <li key={fitem} className="list-group-item">
          {fitem}
        </li>
      ))}
    </ul>
  );
}
export default Fooditem;
