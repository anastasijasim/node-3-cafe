import { useParams } from "react-router-dom";
import { getCar } from "../api/cars";
import Topbar from "../components/Topbar";

const CarPages = () => {
const {id} = useParams ();
const car = getCar(Number(id));

  return (
    <div>
      <Topbar/>
      <h2>
        {car.make} {car.model}
      </h2>
      <div>
        color: <span style={{ backgroundColor: car.color}}>{car.color}</span>
      </div>
    </div>
  )
}

export default CarPages