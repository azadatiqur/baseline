import CompleteDeliveriesSearchAndFilter from "./CompleteDeliveriesSearchAndFilter";
import CompleteDeliveries from "./CompleteDeliveries";
const CompleteDeliveriesSection = () => {
  return (
    <div className="border border-gray-100 mt-10 ml-14 mr-14 rounded-lg flex flex-col flex-wrap sm:flex-nowrap sm:flex-col justify-between">
      <div className="w-full lg:m-2 ml-0 mr-2 p-4 items-center">
        <CompleteDeliveriesSearchAndFilter />
      </div>
      <div className="w-full lg:m-2 ml-0 mr-2 p-4 items-center">
        <CompleteDeliveries />
      </div>
    </div>
  );
};

export default CompleteDeliveriesSection;
