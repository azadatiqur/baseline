import { useState } from "react";
import ImageUploader from "./ImageUploader";

const UserForm = () => {
  const [selectedRole, setSelectedRole] = useState("");
  const handleSelectedRole = (role) => {
    setSelectedRole(role);
  };
  return (
    <form>
      <label htmlFor="name" className="block">
        Name*
      </label>
      <input
        type="text"
        id="name"
        className="bg-gray-100 rounded-lg w-full mt-2 mb-2 p-2"
        required
      />
      <label htmlFor="email" className="block">
        Email*
      </label>
      <input
        type="email"
        id="email"
        className="bg-gray-100 rounded-lg w-full mt-2 mb-2 p-2"
        required
      />
      <label htmlFor="Photo" className="block">
        Photo
      </label>
      <div className="bg-gray-100 rounded-lg w-full mt-2 mb-2 p-2">
        <ImageUploader />
      </div>
      <label htmlFor="phone" className="block">
        Phone*
      </label>
      <input
        type="text"
        id="phone"
        className="bg-gray-100 rounded-lg w-full mt-2 mb-2 p-2"
        required
      />
      <label htmlFor="Role" className="block">
        Role*
      </label>
      <div className="flex flex-row justify-left gap-2 mt-2 mb-2" id="Role">
        <button
          type="button"
          onClick={() => handleSelectedRole("Admin")}
          className={`border border-2 border-gray-500 rounded-3xl p-2 ${
            selectedRole === "Admin"
              ? "bg-blue-200 text-black border-blue-200"
              : "bg-white text-gray-700"
          }`}
        >
          Admin
        </button>
        <button
          type="button"
          onClick={() => handleSelectedRole("Driver")}
          className={`border border-2 border-gray-500 rounded-3xl p-2 ${
            selectedRole === "Driver"
              ? "bg-blue-200 text-black border-blue-200"
              : "bg-white text-gray-700"
          }`}
        >
          Driver
        </button>
      </div>
      {selectedRole === "Driver" && (
        <>
          <label htmlFor="Vehicle" className="block mt-4">
            Vehicle*
          </label>
          <input
            type="text"
            id="Vehicle"
            className="bg-gray-100 rounded-lg w-full mt-2 mb-2 p-2"
            required
          />
          <label htmlFor="License" className="block">
            License Plate*
          </label>
          <input
            type="text"
            id="License"
            className="bg-gray-100 rounded-lg w-full mt-2 mb-2 p-2"
            required
          />
        </>
      )}
    </form>
  );
};

export default UserForm;
