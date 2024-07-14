import DeliveriesData from "@/utils/DeliveriesData";
import DriversData from "@/utils/DriversData";
import { FaCaretRight } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { useParams } from "react-router-dom";
import { MdEdit } from "react-icons/md";
import DriverShortInfo from "@/components/DriverShortInfo";
import VehicleInformation from "@/components/VehicleInformation";
import DeliveryInfoAndMap from "@/components/DeliveryInfoAndMap";
import DeliveryConfirmation from "@/components/DeliveryConfirmation";
const DeliveryDetailsPage = () => {
  const { deliveryIndex } = useParams();
  const pendingStatusBackground =
    DeliveriesData[deliveryIndex].status === "Pending" ? "bg-blue-400" : "";
  const completedStatusBackground =
    DeliveriesData[deliveryIndex].status === "Completed" ? "bg-blue-400" : "";
  return (
    <div className="flex flex-col justify-between">
      {/* blue-part */}
      <div className="flex flex-row bg-blue-500 w-full p-4 text-white">
        <div className="flex flex-col gap-2">
          <div className="flex flex-row justify-left items-center gap-2">
            <span className="text-md ">Driver</span>
            <span className="text-sm">
              <FaCaretRight />
            </span>
            <span className="text-sm font-bold whitespace-nowrap">
              {DeliveriesData[deliveryIndex].driver}
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold">
              {DeliveriesData[deliveryIndex].type}
            </span>
            <span className="text-lg font-bold">
              {DeliveriesData[deliveryIndex].driver}
            </span>
            <span className="text-md">
              {DeliveriesData[deliveryIndex].name}
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-sm font-bold">Status:</span>
            <div className="flex flex-row gap-2">
              <span
                className={`${pendingStatusBackground} p-1 border-white border-2 rounded-2xl txt-sm`}
              >
                Pending
              </span>
              <span
                className={`${completedStatusBackground} p-1 border-white border-2 rounded-2xl txt-sm`}
              >
                Complete
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-grow w-full"></div>
        <div className="w-full flex lg:flex-row flex-row m-auto gap-2">
          <a
            href={`tel:${
              DriversData[DeliveriesData[deliveryIndex].driver].contact
            }`}
            className="w-full bg-gray-500 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded-2xl flex flex-col items-center justify-between"
          >
            <FaPhone />
            <p>Call Contact</p>
          </a>
          <a
            href="#"
            className="w-full bg-transparent border-white border-2 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded-2xl inline-block flex flex-col items-center"
          >
            <MdEdit />
            Edit
          </a>
        </div>
      </div>

      {/* vehicle and driver info */}
      <div className="border border-gray-100 mt-10 ml-14 mr-14 rounded-lg flex flex-col flex-wrap sm:flex-nowrap lg:flex-row justify-between">
        <div className="w-full lg:m-2 ml-0 mr-2 p-4 items-center">
          <VehicleInformation driver={DeliveriesData[deliveryIndex].driver} />
        </div>
        <div className="w-full lg:m-2 ml-0 mr-2 p-4 items-center">
          <DriverShortInfo driver={DeliveriesData[deliveryIndex].driver} />
        </div>
      </div>
      <DeliveryInfoAndMap />
      <DeliveryConfirmation />
    </div>
  );
};

export default DeliveryDetailsPage;
