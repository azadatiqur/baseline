import { useRef } from "react";
import SignatureCanvas from "react-signature-canvas";

const SignaturePad = () => {
  const sigCanvas = useRef({});

  const clearSignature = () => {
    sigCanvas.current.clear();
  };

  const saveSignature = () => {
    const signatureData = sigCanvas.current.toDataURL();
    console.log(signatureData);
    // You can now save or process the signature data
  };

  return (
    <div>
      <SignatureCanvas
        penColor="black"
        canvasProps={{ width: 400, height: 200, className: "sigCanvas" }}
        ref={sigCanvas}
      />
      <div className="flex flex-row gap-4">
        <button
          onClick={clearSignature}
          className="bg-white p-2 border-black border-2 rounded-xl"
        >
          Clear
        </button>
        <button
          onClick={saveSignature}
          className="bg-white p-2 border-black border-2 rounded-xl"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default SignaturePad;
