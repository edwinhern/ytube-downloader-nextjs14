"use client";

import { Row } from "@tanstack/react-table";
import { Download, Trash } from "lucide-react";

import { Button } from "@/components/ui/button";

import { useDownload } from "../context/DownloadContext";

const RowActionsCell = ({ row }: { row: Row<Download> }) => {
  const recordStatus = row.getValue("status");
  const isDisabled = recordStatus !== "success";
  const { removeDownload } = useDownload();

  function handleDelete() {
    const rowUUID = row.original.id;
    removeDownload(rowUUID);
  }

  return (
    <>
      <div className="flex flex-row gap-2">
        <Button size={"icon"} variant={"outline"} disabled={isDisabled}>
          <Download size={14} />
        </Button>
        <Button size={"icon"} variant={"outline"} onClick={handleDelete}>
          <Trash size={14} />
        </Button>
      </div>
    </>
  );
};

export default RowActionsCell;
