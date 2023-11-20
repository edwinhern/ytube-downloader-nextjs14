import React, { createContext, useContext, useState } from "react";

import { ChildProp } from "@/types/common";

interface DownloadContextType {
  downloads: Download[];
  addDownload: (newDownload: Download) => void;
  removeDownload: (id: string) => void;
}

const DownloadContext = createContext<DownloadContextType>({
  downloads: [],
  addDownload: () => {},
  removeDownload: () => {},
});

export const useDownload = () => useContext(DownloadContext);

export const DownloadProvider = ({ children }: ChildProp) => {
  const [downloads, setDownloads] = useState<Download[]>([]);

  const addDownload = (newDownload: Download) => {
    setDownloads([...downloads, newDownload]);
  };

  const removeDownload = (id: string) => {
    const updatedDownloads = downloads.filter((download) => download.id !== id);
    setDownloads(updatedDownloads);
  };

  return (
    <DownloadContext.Provider
      value={{ downloads, addDownload, removeDownload }}
    >
      {children}
    </DownloadContext.Provider>
  );
};
