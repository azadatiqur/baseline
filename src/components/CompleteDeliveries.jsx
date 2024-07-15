import DeliveriesData from "@/utils/DeliveriesData";
import { Link } from "react-router-dom";
import { RxCaretRight } from "react-icons/rx";
const CompleteDeliveries = () => {
  return (
    <ul role="list" className="divide-y divide-gray-150 mt-5 mr-6 sm:mr-1 mb-4">
      {DeliveriesData.map((delivery, index) => {
        if (delivery.status === "Completed") {
          return (
            <Link to={`/delivery/${index}`} className="m-0">
              <li className="hover:bg-gray-300 hover:p-2 hover:rounded-xl flex lg:flex-row flex-col lg:justify-between lg:items-center items-left pb-2 w-full">
                <p className="text-xl font-bold">{delivery.name}</p>
                <p className="text-gray-500">{delivery.type}</p>
                <span className="text-gray-500 flex flex-row items-center">
                  {delivery.location}
                  <RxCaretRight className="text-xl hidden lg:block" />
                </span>
                <div className="lg:hidden flex-col ml-auto">
                  <RxCaretRight />
                </div>
              </li>
            </Link>
          );
        }
        return "";
      })}
    </ul>
  );
};
export default CompleteDeliveries;
