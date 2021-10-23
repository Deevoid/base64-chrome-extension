import { decode } from "js-base64";
import React, { useState } from "react";
import { useCopyToClipboard } from "../useCopyToClipboard";

export const Decode = () => {
  const [input, setInput] = useState("");
  const [decoded, setDecoded] = useState("");

  const [copied, copy] = useCopyToClipboard(decoded);

  const handleInput = (text) => {
    setInput(text);
    if (text) {
      const encodedText = decode(text);
      setDecoded(encodedText);
    } else {
      setDecoded(text);
    }
  };
  return (
    <div className="my-5 w-full">
      <h2 className="text-left text-2xl font-bold mb-4">Decode </h2>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <label
            htmlFor="base64"
            className="block text-sm mb-1 h-6 font-medium text-gray-700"
          >
            Base64 Encoded text
          </label>
          <input
            onChange={(event) => handleInput(event.target.value)}
            value={input}
            type="text"
            name="base64"
            id="base64"
            className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 pr-12 sm:text-sm border-gray-300 rounded-md"
            placeholder="Enter an obnoxious text"
          />
        </div>
        <div>
          <div className="flex h-6 mb-1 items-center justify-between">
            <label
              htmlFor="decoded"
              className="block text-sm mb-1 font-medium text-gray-700"
            >
              Decoded text
            </label>
            {decoded && (
              <button
                onClick={() => copy()}
                className="py-1 px-2 disabled:bg-gray-200 disabled:text-gray-500 text-xs rounded bg-indigo-100 text-indigo-500"
              >
                {copied ? "Copied" : "Copy"}
              </button>
            )}
          </div>
          <input
            value={decoded}
            readOnly
            type="text"
            name="decoded"
            id="decoded"
            className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 pr-12 sm:text-sm border-gray-300 rounded-md"
            placeholder=""
          />
        </div>
      </div>
    </div>
  );
};
