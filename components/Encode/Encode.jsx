import { encode } from "js-base64";
import React, { useState } from "react";
import { useCopyToClipboard } from "../useCopyToClipboard";

export const Encode = () => {
  const [input, setInput] = useState("");
  const [encoded, setEncoded] = useState("");

  const [copied, copy] = useCopyToClipboard(encoded);

  const handleInput = (text) => {
    setInput(text);
    if (text) {
      const encodedText = encode(text);
      setEncoded(encodedText);
    } else {
      setEncoded(text);
    }
  };
  return (
    <div className="my-5 w-full">
      <h2 className="text-left text-2xl font-bold mb-4">Encode </h2>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex-grow">
          <label
            htmlFor="original"
            className="block h-6 text-sm mb-1 font-medium text-gray-700"
          >
            Original text
          </label>
          <input
            onChange={(event) => handleInput(event.target.value)}
            value={input}
            type="text"
            name="original"
            id="original"
            className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 pr-12 sm:text-sm border-gray-300 rounded-md"
            placeholder="Enter an obnoxious text"
          />
        </div>
        <div>
          <div className="flex h-6 mb-1 items-center justify-between">
            <label
              htmlFor="encoded"
              className="block text-sm  font-medium text-gray-700"
            >
              Base 64 Encoded text
            </label>
            {encoded && (
              <button
                onClick={() => copy()}
                className="py-1 px-2 disabled:bg-gray-200 disabled:text-gray-500 text-xs rounded bg-indigo-100 text-indigo-500"
              >
                {copied ? "Copied" : "Copy"}
              </button>
            )}
          </div>

          <input
            value={encoded}
            readOnly
            type="text"
            name="encoded"
            id="encoded"
            className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 pr-12 sm:text-sm border-gray-300 rounded-md"
            placeholder=""
          />
        </div>
      </div>
    </div>
  );
};
