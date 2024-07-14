import DeliveriesData from "../utils/DeliveriesData";
import { useParams } from "react-router-dom";
import MapComponent from "../components/MapComponent";
import DeliveryInfoList from "../components/DeliveryInfoList";
import AddressDetails from "../components/AddressDetails";
import DeliveryToReceptionist from "../components/DeliveryToReceptionist";
const DeliveryPage = () => {
  const { deliveryIndex } = useParams();
  return (
    <>
      <div className="border border-gray-100 mt-10 ml-14 mr-14 rounded-lg flex flex-col flex-wrap sm:flex-nowrap lg:flex-row justify-between">
        <div className="w-full flex flex-col justify-between m-4">
          <p className="text-2xl font-bold mb-4">Location</p>
          <div className="mr-6 sm:ml-0 bg-gray-200 bg-opacity-25 flex flex-row justify-between mb-5 p-2 border border-0 rounded-xl">
            <AddressDetails delivery={DeliveriesData[deliveryIndex]} />
          </div>
          <DeliveryInfoList delivery={DeliveriesData[deliveryIndex]} />
          <DeliveryToReceptionist />
        </div>
        <div className="w-full sm:p-2">
          <MapComponent
            latitude={DeliveriesData[deliveryIndex].latitude}
            longitude={DeliveriesData[deliveryIndex].longitude}
          />
        </div>
      </div>
    </>
  );
};

export default DeliveryPage;
