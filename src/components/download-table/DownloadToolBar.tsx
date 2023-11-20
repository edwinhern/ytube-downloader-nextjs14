"use client";

import { useState } from "react";
import { v4 as uuid } from "uuid";

import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useDownload } from "./context/DownloadContext";

export const DownloadToolBar = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const { addDownload } = useDownload();

  const handleAddClick = () => {
    if (inputValue.trim() !== "") {
      const newDownload: Download = {
        id: uuid(),
        link: inputValue,
        status: "pending",
      };

      addDownload(newDownload);
      setInputValue("");
    }
  };

  return (
    <div className="flex justify-between">
      <div className="flex w-full max-w-sm items-center space-x-2 mb-4">
        <Input
          type="text"
          placeholder="Enter YouTube URL"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Button onClick={handleAddClick}>Add URL</Button>
      </div>
      <Button
        variant={"outline"}
        onClick={() => console.log("click All Download!")}
      >
        Download All
      </Button>
    </div>
  );
};
