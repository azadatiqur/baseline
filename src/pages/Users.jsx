import { Search } from "lucide-react";

import { Input } from "../components/ui/input";
import { CgProfile } from "react-icons/cg";
import AddUserModalButton from "@/components/AddUserModalButton";
import DriversData from "@/utils/DriversData";
import AdminsData from "@/utils/AdminsData";
const Users = () => {
  return (
    <div className="flex flex-col gap-6 p-4">
      <div className="w-full flex flex-col lg:flex-row gap-2">
        <p className="w-full text-2xl font-semibold">Users</p>
        <div className="relative m-auto w-full lg:w-[500px] gap-2 flex flex-row">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search..."
            className="w-full rounded-lg bg-background pl-8 "
          />
          <AddUserModalButton />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-lg font-semibold">Driver</p>
        <div className="flex flex-row gap-2">
          {Object.keys(DriversData).map((driver) => (
            <div className="bg-gray-200 flex flex-col items-center h-40 w-40 border rounded justify-center">
              <CgProfile className="h-16 w-16 border rounded-2xl" />
              <p className="text-sm text-blue-500 font-semibold">
                {DriversData[driver].vehicle}
              </p>
              <p className="text-sm font-semibold">{driver}</p>
              <p className="text-sm text-gray-500">
                {DriversData[driver].license}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-lg font-semibold">Admin</p>
        <div className="flex flex-row gap-2">
          {Object.keys(AdminsData).map((admin) => (
            <div className="bg-gray-200 flex flex-col items-center h-40 w-40 border rounded justify-center">
              <CgProfile className="h-16 w-16 border rounded-2xl" />

              <p className="text-sm font-semibold">{admin}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Users;
