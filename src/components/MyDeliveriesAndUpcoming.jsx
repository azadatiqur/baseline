import MapSearchAndFilter from "./MapSearchAndFilter";
import MapComponent from "./MapComponent";
import UpcomingDeliveries from "./UpcomingDeliveries";
import UpcomingSearchAndFilter from "./UpcomingSearchAndFilter";
const MyDeliveriesAndUpcoming = () => {
  return (
    <div className="border p-2 lg:p-0 sm:border-gray-100 mt-10 ml-14 mr-14 rounded-lg flex flex-col flex-wrap lg:flex-nowrap lg:flex-row justify-between">
      <div className="w-full ml-0 mr-0 mt-2 mb-2 lg:m-4">
        <MapSearchAndFilter />
        <MapComponent />
      </div>
      <div className="w-full ml-0 mr-2 mt-4 mb-0 lg:m-4 lg:flex-nowrap flex-wrap">
        <UpcomingSearchAndFilter />
        <UpcomingDeliveries />
      </div>
    </div>
  );
};

export default MyDeliveriesAndUpcoming;
