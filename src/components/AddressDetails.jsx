import CopyToClipboardLocation from "../components/CopyToClipboardLocation";
const AddressDetails = ({ delivery }) => {
  return (
    <>
      <div className="flex flex-col justify-between">
        <p className="text-lg font-semibold">Address</p>
        <p className="text-gray-400 text-sm">{delivery.location}</p>
      </div>
      <CopyToClipboardLocation location={delivery.location} />
    </>
  );
};

export default AddressDetails;
