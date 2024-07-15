import { Button } from "./ui/button";
import { RxCross2 } from "react-icons/rx";

import UserForm from "./UserForm";
const AddUserModal = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed lg:right-0 lg:bottom-auto bottom-0 right-0 h-full flex items-center justify-center lg:w-1/3 w-full  ${
        isOpen ? "" : "hidden"
      }`}
    >
      <div className="fixed bottom-0 z-50 bg-white rounded-lg shadow-lg lg:w-1/3 w-full h-auto">
        <div className="p-4 border-b flex flex-row items-center justify-center">
          <div className="mr-auto"></div>
          <h2 className="text-xl text-center">New User</h2>

          <RxCross2 onClick={onClose} className="ml-auto" />
        </div>
        <div className="p-4">
          <UserForm />
        </div>
        <div className="p-4 border-t flex justify-left gap-2">
          <Button
            onClick={() => {
              onClose();
              alert("success!");
            }}
            className="bg-blue-500"
            type="Submit"
          >
            Submit
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </div>
      </div>
    </div>
  );
};

export default AddUserModal;
