import { RxCaretRight } from "react-icons/rx";
import truckPic from "../assets/images/truck.png";
import { Link } from "react-router-dom";
const Delivery = ({ delivery, index, customBorderBottomStyle = "" }) => {
  return (
    <Link to={`/delivery/${index}`} className="m-0">
      <li
        className={`flex flex-row justify-between items-center px-5 py-5  hover:bg-gray-400 hover:bg-opacity-50 ${customBorderBottomStyle}`}
      >
        <div className="flex justify-between items-center gap-10">
          <div>
            <img
              alt="Truck pic"
              src={truckPic}
              className="h-12 w-12 rounded-full bg-gray-50"
            />
          </div>
          <div>
            <p className="text-sm font-semibold leading-5 text-blue-700">
              {`${delivery.type} (${delivery.distance} AWAY)`}
            </p>
            <p className="text-lg font-extrabold leading-5 text-gray-900">
              {delivery.name}
            </p>
            <p className="mt-1 text-s leading-5 text-gray-500">
              {delivery.location}
            </p>
          </div>
        </div>
        <div className="ml-auto items-center text-2xl">
          <RxCaretRight />
        </div>
      </li>
    </Link>
  );
};

export default Delivery;
