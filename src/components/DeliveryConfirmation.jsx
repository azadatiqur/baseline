import PhotoAndSignature from "./PhotoAndSignature";
const DeliveryConfirmation = () => {
  return (
    <div className="border border-gray-100 mt-10 ml-14 mr-14 rounded-lg flex flex-col flex-wrap sm:flex-nowrap lg:flex-row justify-between">
      <div className="flex flex-col w-full lg:m-2 ml-0 mr-2 p-4 gap-2">
        <p className="text-xl">Delivery Confirmation</p>
        <PhotoAndSignature />
      </div>
    </div>
  );
};

export default DeliveryConfirmation;
