import { CgProfile } from "react-icons/cg";
import { FaPhone } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import DriversData from "@/utils/DriversData";
const DriverShortInfo = ({ driver }) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-row flex-left gap-4">
        <CgProfile className="h-32 w-32 border rounded-lg" />
        <div className="flex flex-col justify-center">
          <p className="text-blue-500 text-sm font-bold">Driver</p>
          <p className="text-xl">{driver}</p>
        </div>
      </div>
      <div className="flex flex-row w-full gap-4">
        <a
          href={`tel:${DriversData[driver].contact}`}
          className="w-1/2 bg-gray-500 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded-2xl flex flex-col items-center justify-between"
        >
          <FaPhone />
          <p className="whitespace-nowrap">Call Contact</p>
        </a>
        <a
          href="/"
          className="w-1/2 bg-gray-500 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded-2xl flex flex-col items-center justify-between"
        >
          <MdEdit />
          Edit
        </a>
      </div>
    </div>
  );
};

export default DriverShortInfo;
