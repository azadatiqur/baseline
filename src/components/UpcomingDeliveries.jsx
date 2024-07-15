import DeliveriesData from "@/utils/DeliveriesData";
import Delivery from "./Delivery";
const UpcomingDeliveries = () => {
  const customBorderBottomStyle = "border-b-2 border-b-gray-200";
  const getPendingDeliveriesLastIndex = () => {
    let indx = -1;
    DeliveriesData.map((delivery, index) => {
      if (delivery.status === "Pending") {
        indx = index;
      }
    });
    return indx;
  };
  const pendingDeliveriesLastIndex = getPendingDeliveriesLastIndex();
  return (
    <ul
      role="list"
      className="ml-0 mr-16 mb-16 mt-0 divide-y divide-gray-200 border border-gray-200 rounded-2xl w-full"
    >
      {DeliveriesData.map((delivery, index) => {
        if (delivery.status === "Pending") {
          return index !== pendingDeliveriesLastIndex ? (
            <Delivery
              key={index}
              delivery={delivery}
              index={index}
              customBorderBottomStyle={customBorderBottomStyle}
            />
          ) : (
            <Delivery key={index} delivery={delivery} index={index} />
          );
        }
        return null; // Return null for deliveries that are not pending
      })}
    </ul>
  );
};

export default UpcomingDeliveries;
