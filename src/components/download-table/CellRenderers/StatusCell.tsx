import { Row } from "@tanstack/react-table";
import { Dot } from "lucide-react";

const getColorForStatus = (status: string) => {
  switch (status) {
    case "pending":
      return "orange";
    case "processing":
      return "blue";
    case "success":
      return "green";
    case "failed":
      return "red";
    default:
      return "gray";
  }
};

const StatusCell = ({ row }: { row: Row<Download> }) => {
  const status = row.getValue("status") as unknown as string;
  return (
    <div className="flex flex-row items-center gap-1">
      <Dot strokeWidth={8} size={18} color={getColorForStatus(status)} />
      {status}
    </div>
  );
};

export default StatusCell;
