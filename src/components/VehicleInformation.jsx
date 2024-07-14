import DriversData from "@/utils/DriversData";
const VehicleInformation = ({ driver }) => {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-xl">Vehicle Information</p>
      <div className="flex flex-row w-full gap-4">
        <div className="flex flex-col">
          <p className="text-md text-gray-500">Vehicle</p>
          <p className="text-md">{DriversData[driver].vehicle}</p>
        </div>
        <div className="flex flex-col m-auto">
          <p className="text-md text-gray-500">License Plate</p>
          <p className="text-md">{DriversData[driver].license}</p>
        </div>
      </div>
    </div>
  );
};

export default VehicleInformation;
