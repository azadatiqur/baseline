import MapSearchAndFilter from "./MapSearchAndFilter";
import MapComponent from "./MapComponent";
import UpcomingDeliveries from "./UpcomingDeliveries";
import UpcomingSearchAndFilter from "./UpcomingSearchAndFilter";
const MyDeliveriesAndUpcoming = () => {
  return (
    <div className="border border-gray-100 mt-10 ml-14 mr-14 rounded-lg flex flex-col flex-wrap sm:flex-nowrap sm:flex-row justify-between">
      <div className="w-full sm:m-4">
        <MapSearchAndFilter />
        <MapComponent />
      </div>
      <div className="w-full sm:m-4">
        <UpcomingSearchAndFilter />
        <UpcomingDeliveries />
      </div>
    </div>
  );
};

export default MyDeliveriesAndUpcoming;
