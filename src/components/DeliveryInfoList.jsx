const DeliveryInfoList = ({ delivery }) => {
  return (
    <ul role="list" className="divide-y divide-gray-150 mt-5 mr-6 sm:p-2 mb-4">
      <li className="flex justify-between items-center pb-2">
        <p className="text-gray-500">Type</p>
        <p className="text-sm">{delivery.type}</p>
      </li>
      <li className="flex justify-between items-center pt-2 pb-2">
        <p className="text-gray-500">Distance</p>
        <p className="text-sm">{delivery.distance} Away</p>
      </li>
      <li className="flex justify-between items-center pt-2 pb-2">
        <p className="text-gray-500">Date</p>
        <p className="text-sm">{delivery.dateTime}</p>
      </li>
    </ul>
  );
};

export default DeliveryInfoList;
