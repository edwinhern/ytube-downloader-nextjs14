"use client";

import { DownloadProvider } from "./context/DownloadContext";
import DataTableContainer from "./DownloadTableContainer";
import { DownloadToolBar } from "./DownloadToolBar";

export default function DemoPage() {
  return (
    <DownloadProvider>
      <div className="flex-1 flex-col md:flex">
        <DownloadToolBar />
        <DataTableContainer />
      </div>
    </DownloadProvider>
  );
}
