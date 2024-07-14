import DeliveriesData from "@/utils/DeliveriesData";
const CompleteDeliveries = () => {
  return (
    <ul role="list" className="divide-y divide-gray-150 mt-5 mr-6 sm:mr-1 mb-4">
      {DeliveriesData.map((delivery) => {
        if (delivery.status === "Completed") {
          return (
            <li className="flex justify-between items-center pb-2 w-full">
              <p className="text-xl font-bold">{delivery.name}</p>
              <p className="text-gray-500">{delivery.type}</p>
              <p className="text-gray-500">{delivery.location}</p>
            </li>
          );
        }
        return "";
      })}
    </ul>
  );
};

export default CompleteDeliveries;
