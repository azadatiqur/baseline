import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { FaFileImage } from "react-icons/fa";
const ImageUploader = () => {
  const onDrop = useCallback((acceptedFiles) => {
    // Handle dropped files here
    console.log(acceptedFiles);
    // You can perform further processing with the acceptedFiles
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop,
  });

  return (
    <div id="photo" {...getRootProps({ className: "dropzone" })}>
      <input {...getInputProps()} />

      <span className="flex flex-row justify-left items-center gap-2">
        <FaFileImage />
        Choose an image...
      </span>
    </div>
  );
};

export default ImageUploader;
