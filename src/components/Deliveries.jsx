import Delivery from "./Delivery";
import DeliveriesData from "../utils/DeliveriesData";
const Deliveries = () => {
  const customBorderBottomStyle = "border-b-2 border-b-gray-200";
  return (
    <ul
      role="list"
      className="ml-16 mr-16 mb-16 mt-0 divide-y divide-gray-200 border border-gray-200 rounded-2xl"
    >
      {DeliveriesData.map((delivery, index) =>
        index !== DeliveriesData.length - 1 ? (
          <Delivery
            key={index}
            delivery={delivery}
            index={index}
            customBorderBottomStyle={customBorderBottomStyle}
          />
        ) : (
          <Delivery key={index} delivery={delivery} index={index} />
        )
      )}
    </ul>
  );
};

export default Deliveries;
