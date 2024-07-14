import { useState } from "react";
import { RiFileCopyLine } from "react-icons/ri";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { IoIosDoneAll } from "react-icons/io";
const CopyToClipboardLocation = ({ location }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };
  return (
    <>
      <CopyToClipboard text={location} onCopy={handleCopy}>
        <button className="bg-gray-300 bg-opacity-600 hover:bg-gray-500 text-black border border-gray-300 sm:rounded-full rounded-xl sm:p-4 p-2 flex items-center">
          {copied ? (
            <IoIosDoneAll className="text-black" />
          ) : (
            <>
              <RiFileCopyLine className="text-white text-sm sm:text-lg" />
            </>
          )}
        </button>
      </CopyToClipboard>
    </>
  );
};

export default CopyToClipboardLocation;
