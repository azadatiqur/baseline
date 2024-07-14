import ImageUploader from "./ImageUploader";
import SignaturePad from "./SignaturePad";
const PhotoAndSignature = () => {
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="w-full flex flex-col">
        <p className="text-md">Photo</p>
        <div className="bg-gray-200 bg-opacity-80 flex flex-row justify-left items-center gap-x-2 mb-5 p-2 border border-0 rounded-xl mr-6 sm:mr-1 sm:mr-6">
          <ImageUploader />
        </div>
      </div>
      <div className="w-full flex flex-col ml-auto">
        <p className="text-md">Receiver's Signature</p>
        <div className="bg-gray-200 bg-opacity-80 flex flex-row justify-left items-center gap-x-2 mb-5 p-2 border border-0 rounded-xl mr-6 sm:mr-1 sm:mr-6">
          <SignaturePad />
        </div>
      </div>
    </div>
  );
};

export default PhotoAndSignature;
