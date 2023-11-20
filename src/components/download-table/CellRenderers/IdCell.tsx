import { Row } from "@tanstack/react-table";

const IdCell = ({ row }: { row: Row<Download> }) => {
  const id = row.index + 1;
  return <div>{id}</div>;
};

export default IdCell;
