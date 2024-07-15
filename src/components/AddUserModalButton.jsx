import { useState } from "react";
import { Button } from "./ui/button";
import AddUserModal from "./AddUserModal";
const AddUserModalButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="bg-gray-200 flex items-center justify-end">
      <Button onClick={openModal}>+Add User</Button>
      <AddUserModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default AddUserModalButton;
